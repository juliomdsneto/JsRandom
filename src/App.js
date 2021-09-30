import { useState } from 'react'
import ReactDOM from "react-dom";


const App = () => {
  const [state, setState] = useState({
    hasCapture: false,
    squareLeft: 80,
    squareTop: 150
  });


  const [isDragging, setIsDragging] = useState(false)
  const [previousLeft, setPreviousLeft] = useState(0)
  const [previousTop, setPreviousTop] = useState(0)
  const [mudacor, setMudacor] = useState('green')
  const [estadoTrue, setEstadoTrue] = useState(true)
  const [estadoFalse, setEstadoFalse] = useState(false)
  const onDown = event => {
    setIsDragging(true);
    event.target.setPointerCapture(event.pointerId);
    extractPositionDelta(event);
  };

  const onMove = event => {
    if (!isDragging) {
      return;
    }
    const { left, top } = extractPositionDelta(event);

    setState({ ...state, squareLeft: state.squareLeft + left, squareTop: state.squareTop + top })
  };
  const onGotCapture = event => setEstadoTrue({ hasCapture: true });
  const onLostCapture = event => setEstadoFalse({ hasCapture: false });

  const onUp = event => setIsDragging(false);

  const extractPositionDelta = event => {
    const left = event.pageX;
    const top = event.pageY;
    const delta = {
      left: left - previousLeft,
      top: top - previousTop
    };
    //atualizar state
    setPreviousLeft(left);
    setPreviousTop(top);
    return delta;
  };
  return (
    <div>
      <div style={{
        backgroundColor: mudacor,
        width: '250px',
        height: '250px',
        borderColor: 'green',
        top: state,
        left: state
      }}

        touch-action="none"
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerDown={onDown}
        onPointerCancel={onUp}
        onGotPointerCapture={onGotCapture}
        onLostPointerCapture={onLostCapture}
      ></div>
    </div>
  );
}

export default App;
