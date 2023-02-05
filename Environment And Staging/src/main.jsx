import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import "./index.css";
import Experience from "./Experience";
import * as THREE from "three";

import { Leva } from "leva";
const created = (state) => {
	//Option 2 to set background color is to use webgl renderer and setClearColor
	// const { gl } = state;
	// gl.setClearColor("#ff0000", 0.5);
	//OPTION 3 to set background color is to use scene and set background
	// const { scene } = state;
	// scene.background = new THREE.Color("#ff0000");
};

ReactDOM.createRoot(document.getElementById("root")).render(
	<>
		<Leva collapsed={true} />
		<Canvas
			shadows={true} //activate shadow on renderer
			onCreated={created}
			alpha="true"
			camera={{
				near: 0.1,
				far: 1000,
				fov: 75,
				position: [-7, 3, 5],
			}}
		>
			{/* Option4 to set background color is to create a color using R3F and attach it to the scene's background
			<color args={["#ff0000"]} attach="background" /> */}
			<Experience />
		</Canvas>
	</>
);
