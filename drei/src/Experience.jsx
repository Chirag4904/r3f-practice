import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import {
	OrbitControls,
	TransformControls,
	PivotControls,
	Html,
	Text,
	Float,
	MeshReflectorMaterial,
	Sky,
} from "@react-three/drei";

const Experience = () => {
	const cubeRef = useRef();
	const sphereRef = useRef();

	useFrame((state, delta) => {
		cubeRef.current.rotation.y += delta;
	});

	return (
		<>
			<OrbitControls
				makeDefault // when using multiple controls, only one should be default so that the other controls can work
			/>
			<directionalLight position={[1, 2, 3]} />
			<ambientLight intensity={0.3} />

			<mesh position={[3, 0, 0]} ref={cubeRef}>
				<boxGeometry />
				<meshStandardMaterial color="red" wireframe={false} />
			</mesh>
			<TransformControls object={cubeRef} />

			<PivotControls
				anchor={[0, 0, 0]} // pivot point relative to the object
				depthTest={false} // to show the axis even if the object is behind another object
				lineWidth={4}
				axisColors={["#9381ff", "#ff4d6d", "#7ae582"]} // color for axis
				scale={40} // initially respective to object's scale but after fixed=true scale is in pixels
				fixed={true} //to remove the default perspective behaviour
			>
				<mesh scale={0.7} position={[-3, 0, 0]} ref={sphereRef}>
					<sphereGeometry />
					<meshStandardMaterial color="orange" wireframe={false} />

					<Html
						wrapperClass="sphere-text" // class name to style the Html element
						position={[1, 1, 0]} // position relative to the object
						center // pivot point is the center of the Html element
						distanceFactor={8} //to simulate perspective behaviour
						// occlude={[cubeRef, sphereRef]} // to hide the Html element if the object is behind another object
					>
						Sphere
					</Html>
				</mesh>
			</PivotControls>

			<mesh position-y={-1} rotation-x={-Math.PI * 0.5}>
				<planeGeometry args={[15, 15]} />
				<MeshReflectorMaterial
					resolution={512} // resolution of the reflection texture higher value means better quality but slower performance
					blur={[1000, 1000]} // blur of the reflection texture
					mixBlur={0} // mix blur of the reflection texture 0 means no blur and 1 means full blur
					mirror={0.7}
					color="greenyellow"
				/>
				{/* <meshStandardMaterial color="greenyellow" wireframe={false} /> */}
			</mesh>
			<Float speed={4} floatIntensity={4}>
				<Text maxWidth={3} textAlign="center" position-y={2}>
					I Love R3F
					<meshNormalMaterial />
				</Text>
			</Float>
			<Sky />
		</>
	);
};

export default Experience;
