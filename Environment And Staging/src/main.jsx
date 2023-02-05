import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import "./index.css";
import Experience from "./Experience";
import { StrictMode } from "react";
import { Leva } from "leva";

ReactDOM.createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Leva collapsed={true} />
		<Canvas
			alpha="true"
			camera={{
				near: 0.1,
				far: 1000,
				fov: 75,
				position: [-7, 3, 5],
			}}
		>
			<Experience />
		</Canvas>
	</StrictMode>
);
