// src/App.js
import React, { useEffect } from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	useNavigate,
} from "react-router-dom";
import Login from "./Login";
import Home from "./Home";

function CheckTokenAndRedirect() {
	const token = localStorage.getItem("token");
	const navigate = useNavigate();

	useEffect(() => {
    console.log(token)
		if (!token) {
			navigate("/login");
		}
	}, [token, navigate]);

	return null;
}

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/home" element={<Home />} />
				<Route path="*" element={<CheckTokenAndRedirect />} />
			</Routes>
		</Router>
	);
}

export default App;
