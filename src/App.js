import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{ useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  
  const [mode,setMode] = useState("light");
  const [alert,setAlert] = useState(null);

  const changeMode = () =>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#343434";
      document.body.style.color = "white";
      showAlert("Dark Mode Enabled","Success");
    }else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#343434";
      showAlert("Light Mode Enabled","Success");
    }
  }

  const showAlert = (message,type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);
    },2000)
  }
  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils2"
          aboutText="TextAbouts"
          mode={mode}
          changeMode={changeMode}
        />
        <Alert alert={alert} />
        <div className="container my-4" mode={mode}>
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact path={"/learning-react"}
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter Text to analyze "
                  mode={mode}
                />
              }
            ></Route>
            <Route
              exact path={"/"}
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter Text to analyze "
                  mode={mode}
                />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
