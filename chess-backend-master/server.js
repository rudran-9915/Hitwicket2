import express from "express";
import cors from "cors";
import { Server } from "socket.io";
import http from "http";
import { mapUsersToRoom } from "./src/controllers/mapUsersToRoom.js";
import "./src/mongoose.js";
import userRouter from "./src/routes/user.js";
import roomRouter from "./src/routes/room.js";
import { createOrUpdateRoom } from "./src/controllers/roomController.js";

const app = express();
app.use(express.json());
app.use(cors());  // CORS middleware setup for Express

app.use(userRouter);
app.use(roomRouter);

const server = http.createServer(app);  // Create an HTTP server with Express

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],  // Frontend origin
    methods: ["GET", "POST"],
    credentials: true,
  },
});

var waitingUsers = [];

io.on("connection", (socket) => {
  console.log("New client connected", socket.id);

  socket.on("join_room", (data) => {
    waitingUsers.push({ username: data.username, socket: socket });
    waitingUsers = mapUsersToRoom(waitingUsers);
  });

  socket.on("send_data", async (data) => {
    await createOrUpdateRoom(data);
    socket.to(data.roomid).emit("recieve_room_data", data);
  });

  socket.on("send_message", (data) => {
    socket.to(data.roomId).emit("recieve_chat_message", data);
  });

  socket.on("send_check_mate_data", (data) => {
    socket.to(data.roomId).emit("recieve_check_mate_data", data);
  });

  socket.on("reconnection", (data) => {
    socket.join(data.roomId);
  });

  socket.on("leave_room", (data) => {
    socket.leave(data.roomId);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
  });
});

app.get("/", (req, res) => {
  res.send("API is running");
});

server.listen(3001, () => {
  console.log("Server is running on port 3001");
});
