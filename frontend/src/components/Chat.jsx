function Chat(props) {
	return (
		<>
			<h1>
				{props.sender} {props.message}
			</h1>
		</>
	);
}

export default Chat;
