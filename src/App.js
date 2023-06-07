// import logo from './logo.svg';
import React,{ useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from "./Components/Navbar";
import TextForm from './Components/TextForm';
import Alert from './Components/alert';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {
    const [mode,setMode] = useState('light')
    const [alert,setAlert] = useState(null);

    function showAlert(message,type){
      setAlert({
        msg : message,
        type : type
      })
      setTimeout(()=>{
        setAlert(null);
      },1500);
    }

    const toggleMode = ()=>{
      if(mode === 'light'){
        setMode('dark')
        document.body.style.backgroundColor = '#0f2340';
        showAlert("Dark Mode has been enabled","success");
        document.title = 'TextUtilis - Dark Mode'
      }else{
        setMode('light')
        document.body.style.backgroundColor = 'white';
        showAlert("Light Mode has been enabled","success");
        document.title = 'TextUtilis - LIght Mode'
      }
    }
  return (
    <div>
      {/* <Router> */}
        <Navbar title="TextUtlis" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert} />
        <div className='container my-3'>
          {/* <Routes>
              <Route path={'/About'} element={<About/>}/>
              <Route path={'/'} element={<TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode}/>}/>
          </Routes> */}
          <TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode}/>
        </div>
      {/* </Router> */}
    </div>
  );
}

export default App;
