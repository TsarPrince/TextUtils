import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textfield from './components/Textfield';
import About from './components/About';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    setMode((mode === 'light') ? ('dark') : ('light'));

    if (mode === 'light') {
      showAlert('Dark mode enabled');
    } else {
      showAlert('Dark mode disabled');
    }
  }

  if (mode === 'light') {
    document.body.style.backgroundColor = '#fff';
    document.body.style.color = '#343a40';
  }
  else {
    document.body.style.backgroundColor = '#1b242d';
    document.body.style.color = '#fff';
  }

  const [message, setMessage] = useState(null);

  const showAlert = (msg) => {
    setMessage(msg);

    setTimeout(() => {
      setMessage(null);
    }, 2000);
  }

  return (
    <BrowserRouter>

      <Navbar heading="TextUtils" aboutText="About TextUtills" toggleMode={toggleMode} mode={mode} />
      <Alert status='Success' message={message} />

      <Routes>

      <Route exact path="/" element={<Textfield heading="Enter text to analyze below" showAlert={showAlert} />} />
      <Route exact path="/about" element={<About />} />

      </Routes>
    </BrowserRouter>    
  );
}

export default App;
