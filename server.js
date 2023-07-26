import express from "express";
import http from "http";
import { Server } from "socket.io";
import { Quizzes } from "./quizz.js";
import Ranking from "./ranking.js";
// Route importation



const PORT = process.env.PORT || 3000


// const redisClient = redis.createClient()

// Initialisation des middlewares globaux

const app = express()
const server = http.createServer(app)


  // initialisation du socket Server
  export const io = new Server(server,{
    cors : {
        origin :'*'
    }
  });
  

  
app.use(express.static('public'));

const Rooms = new Map()
const GameState = new Map()
// socket.io server
io.on('connection',socket =>{
  console.log( "new socket Connected :", socket.id) 
  // create room
  socket.on("createRoom",(data)=> {
    console.log("first room created : ",data.roomId)
    
    // create room
     Rooms.set(data.roomId,{
      adminName : data.name,
      type : data.type,
      participants : [
        {
        name : data.name,
        points : 0
      } 
    ]
     })
// Send feedback
     socket.emit("feedbackCreatingRoom",{
      status : "success",
      roomId : data.roomId
     })
  })

  // ** Join Room
  socket.on("joinRoom",(data)=>{
    console.log("cest dosee")
    if(!Rooms.has(data.roomId)){
      socket.emit("feedbackJoiningRoom",{
        status : "failed",
        message : `${data.roomId} is not available`
       })
    }else{
      const room = Rooms.get(data.roomId)
      room.participants.push( 
         {
        name : data.name,
        points : 0
      } )

      Rooms.set(data.roomId, room)
      io.emit("updateWaitingRoom",{
        roomId : data.roomId,
        room
       })
      //  
      socket.emit("feedbackJoiningRoom",{
        status : "success",
        message : `successfully JOIND`
       })
    
    }
  })

  // ** waiting room
  socket.on("joinWaitingRoom",(data) =>{
    console.log("joing waiting room")
    const room = Rooms.get(data.roomId)
    socket.emit("feedbackWaiting",{
      roomId : data.roomId,
      room
    })
  })

  //** Game Management
// Handle the "gameStart" event
socket.on("gameStart", (data) => {
  // Current Question 
  GameState.set(data.roomId, 0);
  io.emit("gameStart", {
    roomId: data.roomId,
  });

  // Set Timeout for the first question
  setTimeout(() => {
   
    if(GameState.get(data.roomId)===0){
      io.emit("nextQuestion", {
        roomId: data.roomId,
        question: Quizzes[Rooms.get(data.roomId).type - 1][0],
      });
    }
  },3000)
    // Ten Seconds after the second Question
    socket.on("nextQuestion",(data)=>{
      console.log("trigger")
      const currentQuestionIndex = GameState.get(data.roomId);
      io.emit("nextQuestion", {
        roomId: data.roomId,
        question: Quizzes[Rooms.get(data.roomId).type - 1][currentQuestionIndex + 1],
      });
      GameState.set(data.roomId, currentQuestionIndex + 1);

      // Keep track of the total number of questions in the game
      const totalQuestions = Quizzes.length;

      // Check if all questions have been answered
      if (currentQuestionIndex + 1 >= totalQuestions) {
        // All questions have been answered, so emit the gameEnd event
        io.emit("gameEnd", {
          roomId: data.roomId,
          
        });
        setTimeout(() =>{
    io.emit("ranking",{
      roomId : data.roomId ,
      rankings : Ranking(Rooms.get(data.roomId).participants)
    })
    Rooms.delete(data.roomId)
        },2000)

        
      }
    })
     
  
});

// Handle the "userAnswer" event
socket.on("userAnswer", (data) => {
  const { roomId, answer, name } = data;
  // Here you can validate the user's answer, check if it's correct, and update the user's score or perform other actions as needed.
  const room = Rooms.get(roomId);
  if (Quizzes[room.type - 1][GameState.get(roomId)].correctOption === answer) {
    const Index = room.participants.findIndex((pa) => pa.name === name);
    room.participants[Index].points += 10; // Fix: Use the "+=" operator to add 10 to the existing score
    Rooms.set(roomId, room);
  }
  // Emit to all clients that a user has answered the question
  io.emit("userAnswered", {
    roomId: roomId,
    user: socket.id, // You can send the user's ID or name if available
    answer: answer,
    name
  });
});









})



  server.listen(PORT,()=>{
    console.log("Starting listening on port " + PORT);
})
