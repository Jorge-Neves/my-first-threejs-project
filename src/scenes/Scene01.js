import React from "react";
import { Canvas } from "@react-three/fiber";
import BoxNormal from "../components/Boxes/BoxNormal";

const Scene01 = () => {
  return (
    <Canvas>
      <ambientLight intensity={(0, 1)} />
      <directionalLight color="red" position={[0, 2, 5]} />
      <BoxNormal position={[-2, 0, -5]} />
      <BoxNormal position={[0, 0, 0]} />
      <BoxNormal position={[-3, -3, -3]} />
      <BoxNormal position={[3, 2, -2]} />
    </Canvas>
  );
};

export default Scene01;
