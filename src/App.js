import React, { useState } from "react";
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
  const [scene, setScene] = useState("scene-01");

  const sceneHandler = (number) => {
    setScene(`scene-${number}`);
  };

  return (
    <>
      <Navbar sceneHandler={sceneHandler} />
      {scene === "scene-01" && <Scene01 />}
      {scene === "scene-02" && <Scene02 />}
      {scene === "scene-03" && <Scene03 />}
      {scene === "scene-04" && <Scene04 />}
      {scene === "scene-05" && <Scene05 />}
      {scene === "scene-06" && <Scene06 />}
      {scene === "scene-07" && <Scene07 />}
      {scene === "scene-08" && <Scene08 />}
      {scene === "scene-09" && <Scene09 />}
      {scene === "scene-10" && <Scene10 />}
    </>
  );
}

export default App;
