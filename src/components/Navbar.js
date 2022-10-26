import React from "react";

const Navbar = ({ sceneHandler }) => {
  return (
    <nav>
      <div>
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
          Capsules
        </button>
        <button type="button" onClick={() => sceneHandler("10")}>
          Dodecahedrons
        </button>
      </div>
      <div>
        <button type="button" onClick={() => sceneHandler("01")}>
          Edges
        </button>
        <button type="button" onClick={() => sceneHandler("02")}>
          Extrude
        </button>
        <button type="button" onClick={() => sceneHandler("03")}>
          Icosahedron
        </button>
        <button type="button" onClick={() => sceneHandler("04")}>
          Lathe
        </button>
        <button type="button" onClick={() => sceneHandler("05")}>
          Planes
        </button>
        <button type="button" onClick={() => sceneHandler("06")}>
          Rings
        </button>
        <button type="button" onClick={() => sceneHandler("07")}>
          Tetrahedron
        </button>
        <button type="button" onClick={() => sceneHandler("08")}>
          Torus
        </button>
        <button type="button" onClick={() => sceneHandler("09")}>
          Torus Knot
        </button>
        <button type="button" onClick={() => sceneHandler("10")}>
          Tube
        </button>
      </div>
      <div>
        <button type="button" onClick={() => sceneHandler("01")}>
          Wireframes
        </button>
        <button type="button" onClick={() => sceneHandler("02")}>
          Free Shape
        </button>
        <button type="button" onClick={() => sceneHandler("03")}>
          Icosahedron
        </button>
        <button type="button" onClick={() => sceneHandler("04")}>
          Lathe
        </button>
        <button type="button" onClick={() => sceneHandler("05")}>
          Planes
        </button>
        <button type="button" onClick={() => sceneHandler("06")}>
          Rings
        </button>
        <button type="button" onClick={() => sceneHandler("07")}>
          Tetrahedron
        </button>
        <button type="button" onClick={() => sceneHandler("08")}>
          Torus
        </button>
        <button type="button" onClick={() => sceneHandler("09")}>
          Torus Knot
        </button>
        <button type="button" onClick={() => sceneHandler("10")}>
          Tube
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
