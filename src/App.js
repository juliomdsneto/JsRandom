import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";//alá, apelou

const CIRCLE_SIZE = 85;

const DragBox = () => {
  const [state, setState] = useState({
    hasCapture: false,
    circleLeft: 80,
    circleTop: 150,
    isDragging: false,
    previousLeft: 0,
    previousTop: 0,
  })



  const [circleStyle, setCircleStyle] = useState({
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 5,
    position: "absolute",
    left: state?.circleLeft,
    top: state?.circleTop,
    backgroundColor: state?.hasCapture ? "black" : "green"
  })
  const [boxStyle, setBoxStyle] = useState({
    border: "1px solid #444444",
    margin: "10px 0 20px",
    minHeight: 400,
    width: "100%",
    position: "relative"
  })
  // tu ta colocando ? pq o movimento nao é obrigatorio?
  // o que isso aqui faz exatamente?     const { hasCapture, circleLeft, circleTop } = state;
  //é um obj isso?
  const onDown = event => {
    setState({ ...state, isDragging: true });
    event.target.setPointerCapture(event.pointerId);
    //qual era o problema antes?

    extractPositionDelta(event);
  };

  const onMove = event => {
    console.log(event)
    if (!state.isDragging) {
      return;
    }
    const { left, top } = extractPositionDelta(event);

    setState(({ ...state, circleLeft: circleLeft + left, 
      circleTop: circleTop + top }))
  };

  const onUp = event => setState({ ...state, isDragging: false });
  const onGotCapture = event => setState({ ...state, hasCapture: true });
  const onLostCapture = event => setState({ ...state, hasCapture: false });

  const extractPositionDelta = event => {
    const left = event.clientX;
    const top = event.clientY;
    const delta = {
      left: left - state.previousLeft,
      top: top - state.previousTop
    };
    setState({ ...state, previousLeft: left, previousTop: top })
    return delta;
  };

  const  { hasCapture, circleLeft, circleTop } = state;
  // aloo 

  useEffect(() => {
    setCircleStyle({
      width: CIRCLE_SIZE,
      height: CIRCLE_SIZE,
      borderRadius: CIRCLE_SIZE / 5,
      position: "absolute",
      left: state?.circleLeft,
      top: state?.circleTop,
      backgroundColor: hasCapture ? "red" : "green"
    })
  }, [state])
 
  return (
    <div style={boxStyle}>
      <div
        style={circleStyle}
        touch-action="none"
        onPointerDown={onDown }
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
        onGotPointerCapture={onGotCapture}
        onLostPointerCapture={onLostCapture}
      />
    </div>
  );// pq sem arrow agora?

}//nao é isso?

export default DragBox
