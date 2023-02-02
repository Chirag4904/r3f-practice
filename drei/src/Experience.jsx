import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import {
	OrbitControls,
	TransformControls,
	PivotControls,
	Html,
} from "@react-three/drei";

const Experience = () => {
	const cubeRef = useRef();

	useFrame((state, delta) => {
		cubeRef.current.rotation.y += delta;
	});

	return (
		<>
			<OrbitControls makeDefault />
			<directionalLight position={[1, 2, 3]} />
			<ambientLight intensity={0.3} />

			<mesh position={[3, 0, 0]} ref={cubeRef}>
				<boxGeometry />
				<meshStandardMaterial color="red" wireframe={false} />
			</mesh>
			<TransformControls object={cubeRef} />

			<PivotControls
				anchor={[0, 0, 0]}
				depthTest={false}
				lineWidth={4}
				axisColors={["#9381ff", "#ff4d6d", "#7ae582"]}
				scale={100}
				fixed={true}
			>
				<mesh scale={0.7} position={[-3, 0, 0]}>
					<sphereGeometry />
					<meshStandardMaterial color="orange" wireframe={false} />
					<Html
						wrapperClass="sphere-text"
						position={[1, 1, 0]}
						center
						distanceFactor={8}
					>
						Sphere
					</Html>
				</mesh>
			</PivotControls>

			<mesh position-y={-1} rotation-x={-Math.PI * 0.5}>
				<planeGeometry args={[15, 15]} />
				<meshStandardMaterial color="greenyellow" wireframe={false} />
			</mesh>
		</>
	);
};

export default Experience;
