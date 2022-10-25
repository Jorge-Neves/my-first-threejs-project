import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Navbar from "./components/Navbar";
import Scene01 from "./scenes/Scene01";
import Scene02 from "./scenes/Scene02";
import Scene03 from "./scenes/Scene03";
import Scene04 from "./scenes/Scene04";
import Scene05 from "./scenes/Scene05";
import Scene06 from "./scenes/Scene06";
import Scene07 from "./scenes/Scene07";
import Scene08 from "./scenes/Scene08";
import Scene09 from "./scenes/Scene09";
import Scene10 from "./scenes/Scene10";

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
          <Scene01 />
        </>
      )}
      {scene === "scene-2" && <Scene02 />}
      {scene === "scene-3" && <Scene03 />}
      {scene === "scene-4" && <Scene04 />}
      {scene === "scene-5" && <Scene05 />}
      {scene === "scene-6" && <Scene06 />}
      {scene === "scene-7" && <Scene07 />}
      {scene === "scene-8" && <Scene08 />}
      {scene === "scene-9" && <Scene09 />}
      {scene === "scene-10" && <Scene10 />}
    </>
  );
}

export default App;
