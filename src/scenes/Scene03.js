import React from "react";
import { Canvas } from "@react-three/fiber";
import CylinderNormal from "../components/Cylinders/CylinderNormal";

const Scene03 = () => {
  return (
    <>
      <Canvas>
        <ambientLight intensity={(0, 1)} />
        <directionalLight color="red" position={[0, 2, 5]} />
        <CylinderNormal position={[-2, 0, -5]} animation={"vertical"} />
      </Canvas>
      <Canvas>
        <ambientLight intensity={(0, 1)} />
        <directionalLight color="red" position={[0, 2, 5]} />
        <CylinderNormal position={[0, 0, 0]} animation={"horizontal"} />
      </Canvas>
      <Canvas>
        <ambientLight intensity={(0, 1)} />
        <directionalLight color="red" position={[0, 2, 5]} />
        <CylinderNormal position={[-3, -3, -3]} animation={"vertical"} />
      </Canvas>
      <Canvas>
        <ambientLight intensity={(0, 1)} />
        <directionalLight color="red" position={[0, 2, 5]} />
        <CylinderNormal position={[3, 2, -2]} />
      </Canvas>
    </>
  );
};

export default Scene03;
