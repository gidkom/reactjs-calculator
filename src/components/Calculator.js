import React, { useState, useEffect } from "react";
import "./Calculator.css";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
function Calculator() {
  const [currentSum, setCurrentSum] = useState(0);
  const [errorMsg, setErrorMsg] = useState('');
  const [clear, setClear] = useState(false);

  useEffect(() => {
    document.querySelector("#result").value = "";
  }, []);

  useEffect(() => {
    if (clear) document.querySelector("#result").value = "";
  });

  const Add = (e) => {
    e.preventDefault();
    if (clear) setClear(false);
    setErrorMsg('');
    let currentNum = document.querySelector("#num").value;
    if (currentNum === "") return;
    if (isNaN(currentNum)) {
        setErrorMsg(`'${currentNum}' is not a number`);
        return;
    }
    let sum = currentSum + parseInt(currentNum);
    setCurrentSum(sum);
    document.querySelector("#num").value = "";
  };

  const Clear = (e) => {
    e.preventDefault();
    document.querySelector("form").reset();
    setClear(true);
    setCurrentSum(0);
    setErrorMsg('');
  };

  return (
    <div className="Calc">
      <div className="app-title">
        <h3> Addition Calculator</h3>
      </div>
      <form>
        { errorMsg !== '' ? <Alert variant="danger">{errorMsg}</Alert> : null }
        <input
          className="display"
          type="text"
          id="result"
          value={currentSum}
          readOnly
        />
        <input type="text" id="num" placeholder="enter a number" />
        <div className="button-wrapper">
          <Button variant="success" onClick={Add}>
            Add
          </Button>
          <Button variant="secondary" onClick={Clear}>
            Clear
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Calculator;
