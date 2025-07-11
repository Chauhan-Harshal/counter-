import { useState } from "react";
import './style/index.css';

function App() {
  const [counter, setCounter] = useState(0);

  const handleCounter = (type) => {
    type === "INCREMENT"
      ? setCounter(counter > 0 ? counter - 1 : 0)
      : setCounter(counter + 1);
  };
  const handlePrimeorNotPrime = (num) => {
    let factor = 0;
    for (let i = 1; i <= num; i++) {
      if (num % i == 0) {
        factor++;
      }
    }

    if (factor === 2) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div className="main-container">
      <h1>Welcome to Counter 2.0</h1>
      <div>
        <button
          disabled={counter == 0}
          onClick={() => handleCounter("INCREMENT")}
          data-testid="minusonebtn"
        >
          -1
        </button>{" "}
        <button
          onClick={() => handleCounter("DECREMENT")}
          data-testid="plusonebtn"
        >
          +1
        </button>
        <div>
          <button onClick={() => setCounter(0)} data-testid="resetbtn">
            resetbtn
          </button>
        </div>{" "}
      </div>
      <span data-testid="counter"><h1>Count : <span>{counter} </span></h1> </span>
      <div>
        <span data-testid="odd-or-even">
          {counter % 2 == 0 ? <h1>This Number is :  <span>Even</span></h1> :  <h1>This Number is :  <span>Odd</span></h1>}
        </span>
        <span data-testid="is-prime">
          {handlePrimeorNotPrime(counter) ? <h1>Prime Number : <span>true</span></h1>: <h1>Prime Number : <span>false</span></h1>}
        </span>
      </div>
    </div>
  );
}

export default App;

