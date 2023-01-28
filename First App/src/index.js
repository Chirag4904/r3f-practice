import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import "./style.css";
import Experience from "./Experience";

const root = createRoot(document.getElementById("root"));

root.render(
	<Canvas
		orthographic
		camera={{
			fov: 75,
			position: [3, 2, 6],
		}}
	>
		<Experience />
	</Canvas>
);
