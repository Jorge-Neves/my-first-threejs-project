import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const CapsuleNormal = (props) => {
  const boxRef = useRef();

  useFrame((state, delta) => {
    if (props.animation === "vertical") {
      boxRef.current.rotation.x += delta;
    } else if (props.animation === "horizontal") {
      boxRef.current.rotation.y += delta;
    } else {
      boxRef.current.rotation.z += delta;
    }
  });

  return (
    <>
      <mesh {...props} ref={boxRef}>
        <capsuleGeometry args={[2, 2, 64, 32]} />
        <meshNormalMaterial />
      </mesh>
    </>
  );
};

export default CapsuleNormal;
