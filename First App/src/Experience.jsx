import { extend, useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import CustomObject from "./CustomObject";

extend({ OrbitControls: OrbitControls });

const Experience = () => {
	const { camera, gl } = useThree();

	const cubeRef = useRef();
	const groupRef = useRef();
	useFrame((state, delta) => {
		// console.log(delta);
		cubeRef.current.rotation.y += delta;
		// groupRef.current.rotation.y += delta * 5;
		// console.log(groupRef.current);
	});
	// useState(() => {
	// 	console.log(groupRef);
	// }, []);

	return (
		<>
			<orbitControls args={[camera, gl.domElement]} />

			{/* Lights */}
			<directionalLight position={[1, 2, 3]} />
			<ambientLight intensity={0.3} />
			<group ref={groupRef}>
				<mesh position={[3, 0, 0]} ref={cubeRef}>
					<boxGeometry />
					<meshStandardMaterial color="red" wireframe={false} />
				</mesh>
				<mesh scale={0.7} position={[-3, 0, 0]}>
					<sphereGeometry />
					<meshStandardMaterial color="orange" wireframe={false} />
				</mesh>
			</group>

			<mesh position-y={-1} rotation-x={-Math.PI * 0.5}>
				<planeGeometry args={[15, 15]} />
				<meshStandardMaterial color="greenyellow" wireframe={false} />
			</mesh>
			<CustomObject />
		</>
	);
};

export default Experience;
