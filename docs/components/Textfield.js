import React, { useState } from 'react'

export default function Textfield(props) {

  // array destructuring
  // 'text' variable belongs to a state aka a state variable
  // react watches only state variables (not all variables)
  const [text, setText] = useState('Enter text here');
  // console.log(useState('Enter text here'));    // --> returns ['Enter text here', f()]


  const handleOnChange = (event) => setText(event.target.value);

  const convertToUpperCase = () => setText(text.toUpperCase());
  const convertToLowerCase = () => setText(text.toLowerCase());

  const copy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert('Text copied to clipboard');
  }



  const [btnText, setBtnText] = useState('Start reading');
  const [timerStarted, setTimerStarted] = useState(false);
  const [timer, setTimer] = useState();

  const startTimer = () => {

    const btn = document.getElementById('startTimerBtn');

    if (!timerStarted) {
      setTimerStarted(true);
      const startTime = new Date();

      setTimer(setInterval(() => {
        const currentTime = new Date();
        document.getElementById('timeTaken').textContent = `Your read time: ${((currentTime - startTime) / 1000).toFixed(2)}`;
      }, 50));

      setBtnText('Stop Reading');
      btn.classList.remove('btn-success');
      btn.classList.add('btn-warning');

    } else {

      setTimerStarted(false);
      clearInterval(timer);
      btn.classList.remove('btn-warning');
      btn.classList.add('btn-success');
      setBtnText('Start Reading');
    }
  }


  return (
    <>
      <div className='container my-3'>
        <div className='mb-3'>
          <label htmlFor='textarea' className='form-label'>{props.heading}</label>

          {/* passing 'value' as a prop makes the textarea read-only */}
          {/* onChange event handler has to be used for changing text */}
          <textarea className='form-control' id='textarea' rows='5' value={text} onChange={handleOnChange}></textarea>

          <button className='btn btn-primary my-3 mx-1' onClick={convertToUpperCase}>Convert to Uppercase</button>
          <button className='btn btn-primary my-3 mx-1' onClick={convertToLowerCase}>Convert to Lowercase</button>
          <button className='btn btn-primary my-3 mx-1' onClick={copy}>Copy text</button>

        </div>
      </div>

      <div className='container my-3'>
        <h2>Your text summary</h2>
        <p>{text.split('\n').length} line(s), {text.split(' ').length} word(s), {text.length} character(s)</p>
        <p>Average read time: {0.24 * text.split(' ').length} seconds</p>


        <p id='timeTaken'>Record the time taken by you to read the text by clicking on "Start reading" button and see how you  perform against an average reader.</p>
        <button className='btn btn-success' id='startTimerBtn' onClick={startTimer}>{btnText}</button>

      </div>
    </>
  )
}

