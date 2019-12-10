const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const { addUser, removeUser, getUser, getUsersInRoom } = require("./users");

const PORT = process.env.PORT || 5000;

const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on("connection", socket => {
  socket.on("join", ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) return callback(error);

    socket.emit("message", {
      user: "",
      text: `Welcome, you have joined room ${user.room}`
    });
    socket.broadcast
      .to(user.room)
      .emit("message", { user: "", text: `${user.name} has joined the chat` });
app.use(router);


    socket.emit("message", {
      user: "",
      text: `Welcome, you have joined room "${user.room}"`
    });

    socket.broadcast.to(user.room).emit("message", {
      user: "",
      text: `${user.name} has joined the chat`
    });

    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room)
    });

    socket.join(user.room);

    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit("message", {
      user: `${user.name} : `,
      // user: user.name,
      text: message
    });
    io.to(user.room).emit("roomData", {
      room: user.room,
      user: getUsersInRoom(user.room)
    });

    callback();
  });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit("message", {
        user: "",
        text: `${user.name} has left the chat.`
      });
    }
  });
});

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
