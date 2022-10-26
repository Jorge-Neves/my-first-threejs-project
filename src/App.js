import React, { useState } from "react";
import { Routes, Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
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
import Scene11 from "./scenes/Scene11";
import Scene12 from "./scenes/Scene12";
import Scene13 from "./scenes/Scene13";
import Scene14 from "./scenes/Scene14";
import Scene15 from "./scenes/Scene15";
import Scene16 from "./scenes/Scene16";
import Scene17 from "./scenes/Scene17";
import Scene18 from "./scenes/Scene18";
import Scene19 from "./scenes/Scene19";
import Scene20 from "./scenes/Scene20";

function App() {
  const [scene, setScene] = useState("scene-01");

  const sceneHandler = (number) => {
    setScene(`scene-${number}`);
  };

  return (
    <>
      <Navbar sceneHandler={sceneHandler} />
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/scene01" element={<Scene01 />} />
          <Route path="/scene02" element={<Scene02 />} />
          <Route path="/scene03" element={<Scene03 />} />
          <Route path="/scene04" element={<Scene04 />} />
          <Route path="/scene05" element={<Scene05 />} />
          <Route path="/scene06" element={<Scene06 />} />
          <Route path="/scene07" element={<Scene07 />} />
          <Route path="/scene08" element={<Scene08 />} />
          <Route path="/scene09" element={<Scene09 />} />
          <Route path="/scene10" element={<Scene10 />} />
          <Route path="/scene11" element={<Scene11 />} />
          <Route path="/scene12" element={<Scene12 />} />
          <Route path="/scene13" element={<Scene13 />} />
          <Route path="/scene14" element={<Scene14 />} />
          <Route path="/scene15" element={<Scene15 />} />
          <Route path="/scene16" element={<Scene16 />} />
          <Route path="/scene17" element={<Scene17 />} />
          <Route path="/scene18" element={<Scene18 />} />
          <Route path="/scene19" element={<Scene19 />} />
          <Route path="/scene20" element={<Scene20 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
