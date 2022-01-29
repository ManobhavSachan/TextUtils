import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  //whether darkMode is enabled or not
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("DarkMode has been enabled", "Success");
    } else {
      setMode("light");
      showAlert("DarkMode has been disAbled", "Success");
    }
  };
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route
            exact
            path="/TextForm"
            element={<TextForm heading="Enter the Text to Analyse" />}
          />
          <Route exact path="/About" element={<About />} />
          {/* <div className="container my-3">
              <TextForm />
            </div> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
