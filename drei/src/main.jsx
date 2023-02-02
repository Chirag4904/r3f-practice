import React from "react";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import "./index.css";
import Experience from "./Experience";

ReactDOM.createRoot(document.getElementById("root")).render(
	<Canvas
		alpha="true"
		camera={{
			near: 0.1,
			far: 1000,
			fov: 75,
			position: [3, 2, 9],
		}}
	>
		<Experience />
	</Canvas>
);
