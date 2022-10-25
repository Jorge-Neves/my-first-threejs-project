import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";

function App() {
  const [scene, setScene] = useState("scene-1");
  return (
    <>
      <div>Navbar</div>
      <div className="canvas-container">
        <Canvas>
          <ambientLight intensity={(0, 1)} />
          <directionalLight color="red" position={[0, 0, 5]} />
          <mesh>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial />
          </mesh>
        </Canvas>
      </div>
      <div className="canvas-container">
        <Canvas>
          <ambientLight intensity={(0, 1)} />
          <directionalLight color="blue" position={[0, 0, 5]} />
          <mesh>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial />
          </mesh>
        </Canvas>
      </div>
      <div className="canvas-container">
        <Canvas>
          <ambientLight intensity={(0, 1)} />
          <directionalLight color="yellow" position={[0, 0, 5]} />
          <mesh>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial />
          </mesh>
        </Canvas>
      </div>
      <div className="canvas-container">
        <Canvas>
          <ambientLight intensity={(0, 1)} />
          <directionalLight color="yellow" position={[0, 0, 5]} />
          <mesh>
            <boxGeometry args={[2, 2, 2]} />
            <meshNormalMaterial />
          </mesh>
        </Canvas>
      </div>
    </>
  );
}

export default App;
