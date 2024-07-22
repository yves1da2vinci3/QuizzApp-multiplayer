import express from "express";
import http from "http";
import { Server } from "socket.io";
import { Quizzes } from "./quizz.js";
import Ranking from "./ranking.js";

const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);

export const io = new Server(server, {
  cors: {
    origin: process.env.ALLOWED_ORIGINS?.split(',') || 'http://localhost:3000' || "https://onlinequizzapp.netlify.app/"
  }
});

app.use(express.static('public'));
app.use(express.json());

const Rooms = new Map();
const GameState = new Map();
const UserAnswers = new Map();

function createRoom(socket, data) {
  const { roomId, name, type } = data;
  
  if (Rooms.has(roomId)) {
    socket.emit("feedbackCreatingRoom", {
      status: "failed",
      message: "Room already exists"
    });
    return;
  }

  Rooms.set(roomId, {
    adminName: name,
    type: type,
    participants: [{ name, points: 0 }]
  });

  socket.emit("feedbackCreatingRoom", {
    status: "success",
    roomId: roomId
  });
}

function joinRoom(socket, data) {
  const { roomId, name } = data;

  if (!Rooms.has(roomId)) {
    socket.emit("feedbackJoiningRoom", {
      status: "failed",
      message: `${roomId} is not available`
    });
    return;
  }

  const room = Rooms.get(roomId);
  room.participants.push({ name, points: 0 });

  io.emit("updateWaitingRoom", { roomId, room });
  socket.emit("feedbackJoiningRoom", {
    status: "success",
    message: "Successfully joined"
  });
}

function startGame(socket, data) {
  const { roomId } = data;
  GameState.set(roomId, 0);
  UserAnswers.set(roomId, new Set());
  io.emit("gameStart", { roomId });

  setTimeout(() => {
    if (GameState.get(roomId) === 0) {
      sendNextQuestion(roomId);
    }
  }, 3000);
}

function sendNextQuestion(roomId) {
  const currentQuestionIndex = GameState.get(roomId);
  const room = Rooms.get(roomId);
  const quiz = Quizzes[room.type - 1];

  if (currentQuestionIndex >= quiz.length) {
    endGame(roomId);
    return;
  }

  io.emit("nextQuestion", {
    roomId: roomId,
    question: quiz[currentQuestionIndex],
  });

  GameState.set(roomId, currentQuestionIndex + 1);
  UserAnswers.set(roomId, new Set());
}

function endGame(roomId) {
  io.emit("gameEnd", { roomId });
  
  setTimeout(() => {
    io.emit("ranking", {
      roomId: roomId,
      rankings: Ranking(Rooms.get(roomId).participants)
    });
    Rooms.delete(roomId);
    GameState.delete(roomId);
    UserAnswers.delete(roomId);
  }, 2000);
}

function handleUserAnswer(socket, data) {
  const { roomId, answer, name } = data;
  const room = Rooms.get(roomId);
  const currentQuestionIndex = GameState.get(roomId) - 1;
  const quiz = Quizzes[room.type - 1];

  if (quiz[currentQuestionIndex].correctOption === answer) {
    const participantIndex = room.participants.findIndex(p => p.name === name);
    if (participantIndex !== -1) {
      room.participants[participantIndex].points += 10;
    }
  }

  io.emit("userAnswered", { roomId, user: socket.id, answer, name });

  // Add user to the set of users who have answered
  UserAnswers.get(roomId).add(name);

  // Check if all users have answered
  if (UserAnswers.get(roomId).size === room.participants.length) {
    // Move to the next question immediately
    sendNextQuestion(roomId);
  }
}

io.on('connection', socket => {
  console.log("New socket connected:", socket.id);

  socket.on("createRoom", data => createRoom(socket, data));
  socket.on("joinRoom", data => joinRoom(socket, data));
  socket.on("joinWaitingRoom", data => {
    const room = Rooms.get(data.roomId);
    socket.emit("feedbackWaiting", { roomId: data.roomId, room });
  });
  socket.on("gameStart", data => startGame(socket, data));
  socket.on("nextQuestion", data => sendNextQuestion(data.roomId));
  socket.on("userAnswer", data => handleUserAnswer(socket, data));
});

app.get("/healthcheck", (req, res) => {
  res.json({ message: "Server is healthy" });
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
}).on('error', (err) => {
  console.error('Failed to start server:', err);
});