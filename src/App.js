// Overall looks great! Great job! Just some minor feedback

import React, { useState } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Row, Button } from 'antd';

function App() {
  const [number, setNumber] = useState(0);
  const [alert, setAlert] = useState("");
  const capacity = 100;

  // _increase
  const _increse = () => {
    if (number === capacity) {
      setAlert("Max capacity is reached!")
    } else {
      setNumber(number + 1)
      setAlert("")
    }
  }

  // You can try merging the _increse and _decrease together
  const _decrease = () => {
    if (number === 0) {
      setAlert("Number cannot lower than 0!")
    } else {
      setNumber(number - 1)
      setAlert("")
    }
  }

  const _reset = () => {
    setNumber(0)
    setAlert("")
  }

  return (
    <div className="App">
      <Row type="flex" justify="center" align="middle" style={{ minHeight: '100vh' }}>
        <div className="container">
          <div className="content-container">
            <Button id="reset-button" type="text" onClick={() => _reset()}>
              Reset
            </Button>
            <p className="text">Capacity: {capacity}</p>
            {/* we tend to use className instead of id in React */}
            <h1 id="number">{number}</h1>
            <p className="text">{alert}</p>
          </div>
          <div id="button-container">
            <div>
              <Button id="left-button" type="text" onClick={() => _decrease()}>
                -
              </Button>
            </div>
            <div>
              <Button id="right-button" type="text" onClick={() => _increse()}>
                +
              </Button>
            </div>
          </div>
        </div>
      </Row>
    </div>
  );
}

export default App;
