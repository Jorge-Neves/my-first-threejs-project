import React from "react";

const Navbar = ({ sceneHandler }) => {
  return (
    <nav>
      <button type="button" onClick={() => sceneHandler("01")}>
        Boxes
      </button>
      <button type="button" onClick={() => sceneHandler("02")}>
        Spheres
      </button>
      <button type="button" onClick={() => sceneHandler("03")}>
        Cylinders
      </button>
      <button type="button" onClick={() => sceneHandler("04")}>
        Cones
      </button>
      <button type="button" onClick={() => sceneHandler("05")}>
        Octahedrons
      </button>
      <button type="button" onClick={() => sceneHandler("06")}>
        Circles
      </button>
      <button type="button" onClick={() => sceneHandler("07")}>
        Interactive 01
      </button>
      <button type="button" onClick={() => sceneHandler("08")}>
        Interactive 02
      </button>
      <button type="button" onClick={() => sceneHandler("09")}>
        Interactive 03
      </button>
      <button type="button" onClick={() => sceneHandler("10")}>
        Interactive 04
      </button>
    </nav>
  );
};

export default Navbar;
