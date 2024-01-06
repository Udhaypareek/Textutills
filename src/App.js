// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import Alert from "./Components/Alert";
import About from "./Components/About";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message) => {
    setAlert({
      msg: message,
    });
  };
  let textutilspage = document.body;
  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      // textutilspage.style.backgroundImage = {logo};
      textutilspage.style.backgroundColor = "#00366b";
      showAlert("Dark mode has been enable");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      textutilspage.style.backgroundColor = "white";
      showAlert("Light mode has been enable");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          Textutils="Textutils"
          abouttext="About us"
          mode={Mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/About" element={<About />}></Route>
            <Route
              path="/"
              element={
                <Textform
                  heading="Enter Text Below : "
                  mode={Mode}
                  showAlert={showAlert}
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
