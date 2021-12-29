import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useUrlState } from "./url-state/useUrlState";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./Components/Home";
import { OtherHome } from "./Components/OtherHome";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/2" element={<OtherHome />} />
		</Routes>
	);
}

export default App;
