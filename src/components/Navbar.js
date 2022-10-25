import React from "react";

const Navbar = ({ sceneHandler }) => {
  return (
    <nav>
      <button type="button" onClick={() => sceneHandler(1)}>
        Squares
      </button>
      <button type="button" onClick={() => sceneHandler(2)}>
        Squares
      </button>
      <button type="button" onClick={() => sceneHandler(3)}>
        Squares
      </button>
      <button type="button" onClick={() => sceneHandler(4)}>
        Squares
      </button>
      <button type="button" onClick={() => sceneHandler(5)}>
        Squares
      </button>
      <button type="button" onClick={() => sceneHandler(6)}>
        Squares
      </button>
      <button type="button" onClick={() => sceneHandler(7)}>
        Squares
      </button>
      <button type="button" onClick={() => sceneHandler(8)}>
        Squares
      </button>
      <button type="button" onClick={() => sceneHandler(9)}>
        Squares
      </button>
      <button type="button" onClick={() => sceneHandler(10)}>
        Squares
      </button>
    </nav>
  );
};

export default Navbar;
