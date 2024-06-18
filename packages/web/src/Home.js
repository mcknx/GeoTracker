import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css"; // Importing a CSS file

function Home() {
	const [ip, setIp] = useState("");
	const [geoData, setGeoData] = useState(null);
	const backendLink = "http://localhost:1997/api/";

	useEffect(() => {
		const fetchGeoData = async () => {
			const response = await axios.get(`${backendLink}ip/ipinfo/${ip}`);
			setGeoData(response.data);
		};
		fetchGeoData();
	}, [ip]);

	const handleSubmit = (e) => {
		e.preventDefault();
		setIp(e.target.elements.ip.value);
	};

	return (
		<div className="home-container">
			<form onSubmit={handleSubmit} className="home-form">
				<input type="text" name="ip" required className="home-input" placeholder="IP Address"/>
				<button type="submit" className="home-button">
					Get Geolocation Data
				</button>
			</form>
			{geoData && (
				<div className="geo-data">
					<p>IP: {geoData.ip}</p>
					<p>City: {geoData.city}</p>
					<p>Region: {geoData.region}</p>
					<p>Country: {geoData.country}</p>
				</div>
			)}
		</div>
	);
}

export default Home;
