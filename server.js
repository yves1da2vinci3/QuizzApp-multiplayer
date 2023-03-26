const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

const quizQuestions = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'Berlin', 'Rome', 'Madrid'],
      answer: 'Paris',
    },
    {
      question: 'Which planet is closest to the sun?',
      options: ['Earth', 'Mars', 'Mercury', 'Venus'],
      answer: 'Mercury',
    },
    // Add more questions as needed
  ];
  let gameState = {
    players: {},
    scores: {},
    currentQuestion: 0,
  };
  
  // Function to reset the game state
  function resetGameState() {
    gameState.players = {};
    gameState.scores = {};
    gameState.currentQuestion = 0;
  }  
app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});
const socket = io();

socket.on('connect', () => {
  console.log('Connected to server');
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    const playerId = socket.id;
    gameState.players[playerId] = true;
    gameState.scores[playerId] = 0;
  
    socket.on('disconnect', () => {
      console.log('user disconnected');
      delete gameState.players[playerId];
      delete gameState.scores[playerId];
    });
  
    // More event listeners will be added here
    // Inside the io.on('connection', ...) block
socket.on('submitAnswer', (answer) => {
    if (quizQuestions[gameState.currentQuestion].answer === answer) {
      gameState.scores[playerId]++;
    }
    gameState.currentQuestion++;
    if (gameState.currentQuestion >= quizQuestions.length) {
      io.emit('gameOver', gameState);
      resetGameState();
    } else {
      io.emit('updateGameState', gameState);
    }
  });
// Inside the io.on('connection', ...) block
socket.on('submitAnswer', (answer) => {
    if (quizQuestions[gameState.currentQuestion].answer === answer) {
      gameState.scores[playerId]++;
    }
    gameState.currentQuestion++;
    if (gameState.currentQuestion >= quizQuestions.length) {
      io.emit('gameOver', gameState);
      resetGameState();
    } else {
      io.emit('updateGameState', gameState);
    }
  });
    
  });
http.listen(port, () => {
  console.log(`listening on *:${port}`);
});
