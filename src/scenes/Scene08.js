import React from "react";
import { Canvas } from "@react-three/fiber";
import SquareNormal from "../components/Squares/SquareNormal";

const Scene01 = () => {
  return (
    <>
      <Canvas>
        <ambientLight intensity={(0, 1)} />
        <directionalLight color="red" position={[0, 2, 5]} />
        <SquareNormal position={[-2, 0, -5]} animation={"vertical"} />
      </Canvas>
      <Canvas>
        <ambientLight intensity={(0, 1)} />
        <directionalLight color="red" position={[0, 2, 5]} />
        <SquareNormal position={[0, 0, 0]} animation={"horizontal"} />
      </Canvas>
      <Canvas>
        <ambientLight intensity={(0, 1)} />
        <directionalLight color="red" position={[0, 2, 5]} />
        <SquareNormal position={[-3, -3, -3]} animation={"vertical"} />
      </Canvas>
      <Canvas>
        <ambientLight intensity={(0, 1)} />
        <directionalLight color="red" position={[0, 2, 5]} />
        <SquareNormal position={[3, 2, -2]} />
      </Canvas>
    </>
  );
};

export default Scene01;
