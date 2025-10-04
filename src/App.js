import { useState, useRef } from 'react';
import './App.css';

function App() {

  const [result, setResult] = useState(0);
  const inputRef = useRef(null);
  const resultRef = useRef(null);

  function plus(e){
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value))
  }

  function minus(e){
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value))
  }

  function pow(e){
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value))
  }

  function divide(e){
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value))
  }

  function resetInput(e){
    e.preventDefault();
    inputRef.current.value = "";
  }

  function resetResult(e){
    e.preventDefault();
    setResult(0);
  }


  return (
    <div className="App">
      <div>
        <h1>Simple Calculator App </h1>
      </div>

      <form>
        <p ref={resultRef}>
          Answer: {result}
        </p>

        <input
          type='number'
          pattern='[0-9]*3'
          placeholder="Type a number"
          ref={inputRef}
        />
          <div className='button-con'>
            <button className='plus' onClick={plus}> + </button>
            <button className='minus' onClick={minus}> - </button>
            <button className='pow' onClick={pow}> * </button>
            <button className='divide' onClick={divide}> / </button>
          </div>

          <div className='button-res'>
          <button className='resetInput' onClick={resetInput}> Input Reset </button>
          <button className='resetResult' onClick={resetResult}> Answer Reset </button>
          </div>

        </form>



    </div>
  );
}

export default App;
