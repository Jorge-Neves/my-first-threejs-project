import React from "react";

const BoxNormal = (props) => {
  return (
    <>
      <mesh {...props}>
        <boxGeometry args={[2, 2, 2]} />
        <meshNormalMaterial />
      </mesh>
    </>
  );
};

export default BoxNormal;
