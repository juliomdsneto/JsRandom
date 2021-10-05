import React, { useState } from "react";

export default function App() {

  const [color, setColor] = useState('green');
  const [drag, setDrag] = useState({
    active: false,
    x: "",
    y: ""
  });

  const [dims, setDims] = useState({
    w: 200,
    h: 200
  });


  const startResize = (e) => {
    setDrag({
      active: true,

      x: e.clientX,
      y: e.clientY,
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
      height: "100vh",
      display: "flex"
    }} onMouseMove={resizeFrame} onMouseUp={stopResize}>
      <div
        style={{
          minWidth: '200px',
          minHeight: '200px',
          width: `${dims.w}px`,
          height: `${dims.h}px`,
          backgroundColor: "red",
          position: "relative"
        }}
      >
        <button
          style={
            {
              background: color,
              width: '15px',
              height: '15px',
              border: 'none',
              position: "absolute",
              left: 0,
              top: 0,
              cursor: "pointer",
            }
          } className="teste"
          onClick={() => { setColor("white") }}
          onMouseDown={startResize}>

        </button>
        <button style={
          {
            backgroundColor: 'black',
            width: '15px',
            height: '15px',
            border: 'none',
            position: "absolute",
            right: 0,
            top: 0,
            cursor: "pointer",
          }
        }
          onMouseDown={startResize}>

        </button>
        <button style={
          {
            backgroundColor: 'blue',
            width: '15px',
            height: '15px',
            border: 'none',
            position: "absolute",
            left: 0,
            bottom: 0,
            cursor: "pointer",
          }
        }
          //resizeBox
          onMouseDown={startResize}>

        </button>
        <button style={
          {
            backgroundColor: 'black',
            width: '15px',
            height: '15px',
            border: 'none',
            position: "absolute",
            right: 0,
            bottom: 0,
            cursor: "pointer",
          }
        }
          onMouseDown={startResize}>

        </button>
        <button style={
          {
            backgroundColor: 'black',
            width: '15px',
            height: '15px',
            border: 'none',
            position: "absolute",
            right: 0,
            bottom: "45%",
            cursor: "pointer",
          }
        }
          onMouseDown={startResize}>

        </button>
        <button style={
          {
            backgroundColor: 'green',
            width: '15px',
            height: '15px',
            border: 'none',
            position: "absolute",
            left: 0,
            bottom: "45%",
            cursor: "pointer",
          }
        }
          onMouseDown={startResize}>

        </button>
        <button style={
          {
            backgroundColor: 'green',
            width: '15px',
            height: '15px',
            border: 'none',
            position: "absolute",
            right: "45%",
            left: '45%',
            bottom: 0,
            cursor: "pointer",
          }
        }
          onMouseDown={startResize}>

        </button>

        <button style={
          {
            backgroundColor: 'black',
            width: '15px',
            height: '15px',
            border: 'none',
            position: "absolute",
            right: "45%",
            left: '45%',
            top: 0,
            cursor: "pointer",
          }
        }
          onMouseDown={startResize}>

        </button>
      </div>
    </div>
  );
}
