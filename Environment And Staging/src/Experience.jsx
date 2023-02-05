import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls, useHelper } from "@react-three/drei";
import { Perf } from "r3f-perf";
import * as THREE from "three";

const Experience = () => {
	const cubeRef = useRef();
	const sphereRef = useRef();
	const directionalLight = useRef();

	useHelper(directionalLight, THREE.DirectionalLightHelper, 0.5, "hotpink"); //useHelper is a hook that allows you to add helpers to objects where first argument is the object you want to add the helper to, second argument is the helper class from threejs you want to add, third argument is the size of the helper, and fourth argument is the color of the helper

	useFrame((state, delta) => {
		cubeRef.current.rotation.y += delta;
	});

	return (
		<>
			<Perf position="top-left" />

			<OrbitControls
				makeDefault // when using multiple controls, only one should be default so that the other controls can work
			/>
			<directionalLight ref={directionalLight} position={[1, 2, 3]} />
			<ambientLight intensity={0.3} />

			<mesh position={[2, 0, 0]} ref={cubeRef}>
				<boxGeometry />
				<meshStandardMaterial color="red" wireframe={false} />
			</mesh>

			<mesh scale={0.7} position={[-3, 0, 0]} ref={sphereRef}>
				<sphereGeometry />
				<meshStandardMaterial color="orange" wireframe={false} />
			</mesh>

			<mesh position-y={-1} rotation-x={-Math.PI * 0.5}>
				<planeGeometry args={[15, 15]} />
				<meshStandardMaterial color="greenyellow" />
				{/* <meshStandardMaterial color="greenyellow" wireframe={false} /> */}
			</mesh>
		</>
	);
};

export default Experience;
