import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [scene, setScene] = useState("scene-1");

  const sceneHandler = (number) => {
    setScene(`scene-${number}`);
  };
  return (
    <>
      <Navbar sceneHandler={sceneHandler} />
      {scene === "scene-1" && (
        <>
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
      )}
      {scene === "scene-2" && (
        <>
          <span>placeholder</span>
        </>
      )}
      {scene === "scene-3" && (
        <>
          <span>placeholder</span>
        </>
      )}
      {scene === "scene-4" && (
        <>
          <span>placeholder</span>
        </>
      )}
      {scene === "scene-5" && (
        <>
          <span>placeholder</span>
        </>
      )}
      {scene === "scene-6" && (
        <>
          <span>placeholder</span>
        </>
      )}
      {scene === "scene-7" && (
        <>
          <span>placeholder</span>
        </>
      )}
      {scene === "scene-8" && (
        <>
          <span>placeholder</span>
        </>
      )}
      {scene === "scene-9" && (
        <>
          <span>placeholder</span>
        </>
      )}
      {scene === "scene-10" && (
        <>
          <span>placeholder</span>
        </>
      )}
    </>
  );
}

export default App;
