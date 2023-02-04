import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";

import { useControls, button } from "leva";
import { Perf } from "r3f-perf";

const Experience = () => {
	const cubeRef = useRef();
	const sphereRef = useRef();

	const { perfVisible } = useControls({
		perfVisible: true,
	});

	const { position_x, position_y, sphereColor, sphereVisible } = useControls(
		"sphere", // will create a folder with this name
		{
			position_x: -2, // number which when changed will update the position of the sphere as the component re-renders
			position_y: {
				value: 0,
				min: -2,
				max: 2,
				step: 0.1,
			}, //number with slider

			sphereColor: "orange", //string value will add color picker to the leva panel
			sphereVisible: true, //boolean value will add checkbox to the leva panel
			clickMe: button(() => {
				console.log("clicked");
			}), //button will add a button to the leva panel
			choice: {
				options: ["option1", "option2", "option3"],
			}, //select will add a options selector to the leva panel
		}
	);

	const { cubePos } = useControls("cube", {
		cubePos: {
			value: { x: 3, y: 0 },
			joystick: "invertY",
		}, //object value will add joystick to the leva panel
	});

	useFrame((state, delta) => {
		cubeRef.current.rotation.y += delta;
	});

	return (
		<>
			{perfVisible && <Perf position="top-left" />}

			<OrbitControls
				makeDefault // when using multiple controls, only one should be default so that the other controls can work
			/>
			<directionalLight position={[1, 2, 3]} />
			<ambientLight intensity={0.3} />

			<mesh position={[cubePos.x, cubePos.y, 0]} ref={cubeRef}>
				<boxGeometry />
				<meshStandardMaterial color="red" wireframe={false} />
			</mesh>

			<mesh
				scale={0.7}
				position={[position_x, position_y, 0]}
				ref={sphereRef}
				visible={sphereVisible}
			>
				<sphereGeometry />
				<meshStandardMaterial color={sphereColor} wireframe={false} />
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
