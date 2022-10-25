import React from "react";

const Navbar = ({ sceneHandler }) => {
  return (
    <nav>
      <button type="button" onClick={() => sceneHandler("01")}>
        Boxes
      </button>
      <button type="button" onClick={() => sceneHandler("02")}>
        Cones
      </button>
      <button type="button" onClick={() => sceneHandler("03")}>
        Cylinders
      </button>
      <button type="button" onClick={() => sceneHandler("04")}>
        Spheres
      </button>
      <button type="button" onClick={() => sceneHandler("05")}>
        Octahedrons
      </button>
      <button type="button" onClick={() => sceneHandler("06")}>
        Circles
      </button>
      <button type="button" onClick={() => sceneHandler("07")}>
        Triangles
      </button>
      <button type="button" onClick={() => sceneHandler("08")}>
        Squares
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
