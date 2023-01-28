import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import "./style.css";
import Experience from "./Experience";
import * as THREE from "three";

const root = createRoot(document.getElementById("root"));

root.render(
	<Canvas
		// flat
		dpr={[1, 2]}
		gl={{ antialias: true, outputEncoding: THREE.sRGBEncoding }}
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
