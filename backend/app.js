const express = require("express");
const app = express();

const server = require("http").createServer(app);
const io = require("socket.io")(server, {
	cors: {
		origin: "*",
		methods: ["GET", "POST"],
	},
});

io.on("connection", (socket) => {
	console.log("user connected");
	socket.on("disconnect", () => {
		console.log("user disconnected");
	});

	socket.on("chat-message", (msg) => {
		socket.broadcast.emit("receive-message", msg);
	});
});

server.listen(4000, () => {
	console.log("Server on port 4000");
});
