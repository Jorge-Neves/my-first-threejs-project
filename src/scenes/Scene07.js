import React from "react";
import { Canvas } from "@react-three/fiber";
import TriangleNormal from "../components/Triangles/TriangleNormal";

const Scene07 = () => {
  return (
    <>
      <Canvas>
        <ambientLight intensity={(0, 1)} />
        <directionalLight color="red" position={[0, 2, 5]} />
        <TriangleNormal position={[-2, 0, -5]} animation={"vertical"} />
      </Canvas>
      <Canvas>
        <ambientLight intensity={(0, 1)} />
        <directionalLight color="red" position={[0, 2, 5]} />
        <TriangleNormal position={[0, 0, 0]} animation={"horizontal"} />
      </Canvas>
      <Canvas>
        <ambientLight intensity={(0, 1)} />
        <directionalLight color="red" position={[0, 2, 5]} />
        <TriangleNormal position={[-3, -3, -3]} animation={"vertical"} />
      </Canvas>
      <Canvas>
        <ambientLight intensity={(0, 1)} />
        <directionalLight color="red" position={[0, 2, 5]} />
        <TriangleNormal position={[3, 2, -2]} />
      </Canvas>
    </>
  );
};

export default Scene07;
