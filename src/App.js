import React, { useState } from "react";
import ReactDOM from "react-dom";//alá, apelou


export default function App() {
  const [drag, setDrag] = useState({
    active: false,
    x: "",
    y: ""
  });

  const [dims, setDims] = useState({
    w: 200,
    h: 200
  });

  const [boxForm, setBoxForm] = useState({
    width: `${dims.w}px`,
    height: `${dims.h}px`,
    backgroundColor: "red"
  });

const teste = {
  width: `${dims.w}px`,
    height: `${dims.h}px`,
    backgroundColor: "red"
}


  const startResize = (e) => {
    setDrag({
      active: true,
      x: e.clientX,
      y: e.clientY
    });
  };

  const resizeFrame = (e) => {
    const { active, x, y } = drag;
    if (active) {
      const xDiff = Math.abs(x - e.clientX);
      const yDiff = Math.abs(y - e.clientY);
      const newW = x > e.clientX ? dims.w - xDiff : dims.w + xDiff;
      const newH = y > e.clientY ? dims.h + yDiff : dims.h - yDiff;

      setDrag({ ...drag, x: e.clientX, y: e.clientY });
      setDims({ w: newW, h: newH });
    }
  };

  const stopResize = (e) => {
    setDrag({ ...drag, active: false });
  };

  return (
    <div style={{
      justifyContent: "center",
      alignItems: "center",
      height:"100vh",
      display: "flex"
    }} onMouseMove={resizeFrame} onMouseUp={stopResize}>
      <div
        style={teste}
      >
        <button style={
          {
            cursor: "pointer",
            border: "2p solid black",
            float: "right",
            margin: 0
          }
        }
        onMouseDown={startResize}>
         .
        </button>
        <button style={
          {
            cursor: "pointer",
            border: "2p solid black",
            float: "center",
            margin: 0
          }
        }
        onMouseDown={startResize}>
         .
        </button>

        <button style={
          {
            cursor: "pointer",
            border: "2p solid black",
            float: "revert",
            margin: 0
          }
        }
        onMouseDown={startResize}>
         .
        </button>

      </div>
    </div>
  );
}


// style = {
//   {
//     cursor: "pointer",
//     border: "2p solid black",
//     float: "center",
//     margin: 0
//   }
// }


// .container {
//   display: flex;
//   height: 100vh;
//   justify-content: center;
//   align-items: center;
// }

// .box {
//   background-color: red;
// }

// display: "flex",
// justifyContent: "center",
// flex: 1,
// backgroundColor: "green",
// height: 100,
// alignItems: "center"
// }
