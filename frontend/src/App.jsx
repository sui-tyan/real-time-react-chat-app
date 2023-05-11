import { useEffect, useState } from "react";
import Textbox from "./components/Textbox";
import Chat from "./components/Chat";
import "./App.css";
import io from "socket.io-client";

const socket = io.connect("localhost:4000");

function App() {
	const [chat, takeChats] = useState([]);
	function deliver(message) {
		socket.emit("chat-message", message);
		takeChats((prevChats) => {
			return [...prevChats, message];
		});
	}

	useEffect(() => {
		socket.on("receive-message", (data) => {
			takeChats((prevChats) => {
				return [...prevChats, data];
			});
		});
	}, [socket]);

	return (
		<>
			<div className="m-5">
				{chat.map((message, index) => {
					return <Chat key={index} id={index} message={message} sender=":" />;
				})}
				<Textbox onSend={deliver} />
			</div>
		</>
	);
}

export default App;
