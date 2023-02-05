import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import {
	OrbitControls,
	useHelper,
	BakeShadows,
	AccumulativeShadows,
	// softShadows,
	RandomizedLight,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import * as THREE from "three";

// Use backing when the scene is static to improve performance and we can use BakeShadows helper from drei
// It will render the shadows only once and not on each frame

// softShadows({
// 	frustum: 3.75, // frustum is the distance from the camera to the far plane
// 	size: 0.005, // size is the size of the shadow map
// 	near: 0.5, // near is the distance from the camera to the near plane
// 	samples: 17, // samples is the number of samples used to render the shadow map
// 	rings: 11, // rings is the number of rings used to render the shadow map
// });

// ACCUMULATIVE SHADOWS will accumulate multiple shadow renders and we are going to move light randomly before each render
// the shadow will be composed of multiple renders from various angles making it look soft and realistic
// Can be rendered on plane only

// So if we use directional light since it's still the shadows which are rendered multiple times are applied again and again due to which the shadows become darker and darker so 1 solution is to ue RandomizedLight helper from drei which will move the light or lights randomly on each frame

const Experience = () => {
	const cubeRef = useRef();
	const sphereRef = useRef();
	const directionalLight = useRef();

	useHelper(directionalLight, THREE.DirectionalLightHelper, 0.5, "hotpink"); //useHelper is a hook that allows you to add helpers to objects where first argument is the object you want to add the helper to, second argument is the helper class from threejs you want to add, third argument is the size of the helper, and fourth argument is the color of the helper

	useFrame((state, delta) => {
		const time = state.clock.elapsedTime;
		cubeRef.current.position.x = 2 + Math.sin(time);
	});

	return (
		<>
			{/* <BakeShadows /> */}
			<Perf position="top-left" />

			<OrbitControls
				makeDefault // when using multiple controls, only one should be default so that the other controls can work
			/>
			<AccumulativeShadows
				position={[0, -0.99, 0]}
				scale={10} //default scale is 10
				color="#316d39"
				opacity={0.8}
				frames={Infinity}
				temporal
				blend={100}
			>
				<RandomizedLight
					amount={8}
					radius={1}
					ambient={0.5}
					intensity={1}
					bias={0.001}
					position={[1, 2, 3]}
					castShadow
				/>
			</AccumulativeShadows>

			<directionalLight
				ref={directionalLight}
				position={[1, 2, 3]}
				castShadow
				shadow-mapSize={[128 * 4, 128 * 4]}
				// shadow-camera-far={10}
				// shadow-camera-near={1}
				shadow-camera-left={-5}
				shadow-camera-right={5}
				shadow-camera-top={5}
				shadow-camera-bottom={-5}
			/>
			<ambientLight intensity={0.3} />

			<mesh position={[2, 0, 0]} ref={cubeRef} castShadow>
				<boxGeometry />
				<meshStandardMaterial color="red" wireframe={false} />
			</mesh>

			<mesh scale={0.7} position={[-2, 0, 0]} ref={sphereRef} castShadow>
				<sphereGeometry />
				<meshStandardMaterial color="orange" wireframe={false} />
			</mesh>

			<mesh position-y={-1} rotation-x={-Math.PI * 0.5}>
				<planeGeometry args={[10, 10]} />
				<meshStandardMaterial color="greenyellow" />
				{/* <meshStandardMaterial color="greenyellow" wireframe={false} /> */}
			</mesh>
		</>
	);
};

export default Experience;
