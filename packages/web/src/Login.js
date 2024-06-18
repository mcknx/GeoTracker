import React, { useState } from "react";
import axios from "axios";
import "./Login.css"; // Importing a CSS file

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const backendLink = "http://localhost:1997/api/";

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await axios.post(`${backendLink}user/login`, {
			email,
			password,
		});
		localStorage.setItem("token", response.data.token);
	};

	return (
		<div className="login-container">
			<form onSubmit={handleSubmit} className="login-form">
				<input
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
					className="login-input"
					placeholder="Email"
				/>
				<input
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
					className="login-input"
					placeholder="Password"
				/>
				<button type="submit" className="login-button" >
					Login
				</button>
			</form>
		</div>
	);
}

export default Login;
