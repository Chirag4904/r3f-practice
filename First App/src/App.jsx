import { Canvas } from "@react-three/fiber";

const App = () => {
	return (
		<div>
			<mesh>
				<boxGeometry />
				<meshStandardMaterial color="red" />
			</mesh>
		</div>
	);
};

export default App;
