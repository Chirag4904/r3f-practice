import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import "./style.css";
import Experience from "./Experience";

const root = createRoot(document.getElementById("root"));

root.render(
	<Canvas
		// orthographic
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
