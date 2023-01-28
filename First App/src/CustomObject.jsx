import { DoubleSide } from "three";
import { useMemo, useState, useRef, useEffect } from "react";
const CustomObject = () => {
	//for 10 traingles
	const verticesCount = 6 * 3;
	// const [se, setSe] = useState(0);

	const buffGeometryRef = useRef();

	const positions = useMemo(() => {
		const positions = new Float32Array(verticesCount * 3);

		for (let i = 0; i < verticesCount * 3; i++) {
			console.log("first");
			positions[i] = (Math.random() - 0.5) * 4;
		}
		return positions;
	}, []);

	useEffect(() => {
		buffGeometryRef.current.computeVertexNormals();
	}, [positions]);

	// const handler = (e) => {
	// 	console.log("onPointerEnter", e);
	// 	setSe(se + 1);
	// };

	return (
		<>
			<mesh>
				<bufferGeometry ref={buffGeometryRef}>
					<bufferAttribute
						attach={"attributes-position"}
						count={verticesCount}
						itemSize={3}
						array={positions}
					/>
				</bufferGeometry>
				<meshStandardMaterial color="red" side={DoubleSide} />
			</mesh>
		</>
	);
};

export default CustomObject;
