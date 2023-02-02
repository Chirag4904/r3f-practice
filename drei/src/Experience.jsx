import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls, TransformControls } from "@react-three/drei";

const Experience = () => {
	const cubeRef = useRef();

	useFrame((state, delta) => {
		cubeRef.current.rotation.y += delta;
	});

	return (
		<>
			<OrbitControls />
			<directionalLight position={[1, 2, 3]} />
			<ambientLight intensity={0.3} />
			<group>
				<TransformControls>
					<mesh position={[3, 0, 0]} ref={cubeRef}>
						<boxGeometry />
						<meshStandardMaterial color="red" wireframe={false} />
					</mesh>
				</TransformControls>
				<mesh scale={0.7} position={[-3, 0, 0]}>
					<sphereGeometry />
					<meshStandardMaterial color="orange" wireframe={false} />
				</mesh>
			</group>

			<mesh position-y={-1} rotation-x={-Math.PI * 0.5}>
				<planeGeometry args={[15, 15]} />
				<meshStandardMaterial color="greenyellow" wireframe={false} />
			</mesh>
		</>
	);
};

export default Experience;
