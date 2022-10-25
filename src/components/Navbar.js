import React from "react";

const Navbar = ({ sceneHandler }) => {
  return (
    <nav>
      <button type="button" onClick={() => sceneHandler("01")}>
        Squares
      </button>
      <button type="button" onClick={() => sceneHandler("02")}>
        Squares
      </button>
      <button type="button" onClick={() => sceneHandler("03")}>
        Squares
      </button>
      <button type="button" onClick={() => sceneHandler("04")}>
        Squares
      </button>
      <button type="button" onClick={() => sceneHandler("05")}>
        Squares
      </button>
      <button type="button" onClick={() => sceneHandler("06")}>
        Squares
      </button>
      <button type="button" onClick={() => sceneHandler("07")}>
        Squares
      </button>
      <button type="button" onClick={() => sceneHandler("08")}>
        Squares
      </button>
      <button type="button" onClick={() => sceneHandler("09")}>
        Squares
      </button>
      <button type="button" onClick={() => sceneHandler("10")}>
        Squares
      </button>
    </nav>
  );
};

export default Navbar;
