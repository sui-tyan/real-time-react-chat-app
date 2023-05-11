import { useState } from "react";

function Textbox(props) {
	const [message, setMessage] = useState("");

	function portMessage(event) {
		const newMessage = event.target.value;
		setMessage(newMessage);
	}

	function sendMessage(event) {
		props.onSend(message);
		console.log(event.target.name);
		setMessage("");
		event.preventDefault();
	}

	return (
		<>
			<div className="fixed bottom-0">
				<form onSubmit={sendMessage}>
					<div className="mb-5">
						<input
							type="text"
							onChange={portMessage}
							value={message}
							name="message"
							className="bg-black caret-[#00FF00] outline-none placeholder-[#00FF00]"
							placeholder="Write a message..."
						/>
					</div>
				</form>
			</div>
		</>
	);
}

export default Textbox;
