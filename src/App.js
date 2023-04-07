import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextUtils from './components/TextUtils';
// import { BrowserRouter, Routes, Route} from "react-router-dom";
// import About from './components/About';
import Alerts from './components/Alerts';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
    setInterval(() => {
      setAlert(null)
    }, 2000);
  }

  const changeMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#212529';
      console.log(mode); // Log the current value of "mode" to the console
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      console.log(mode); // Log the current value of "mode" to the console
    }
    showAlert(`${mode} mode is enabled`, 'Succes')
    return mode;
  }
  return (
    <>
        <Navbar title="Text Utils" mode={mode} changeMode={changeMode} />
        <Alerts alert={alert}/>
        <TextUtils mode={mode} showAlert={showAlert}/>
      {/* <BrowserRouter>
        <Alerts alert={alert}/>
        <Navbar title="Text Utils" mode={mode} changeMode={changeMode} />
        <Routes>
            <Route path="/" element={<TextUtils mode={mode}/>} />
            <Route path="textutils" element={<TextUtils mode={mode}/>} />
            <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
