import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
// import Header from "./Components/Header";
import Home from "./Components/Home";
import DetailsPage from "./Components/DetailsPage";
import ConfettiAnimation from "./Components/ConfettiAnimation";

function App() {
  const [isPartyMode, setIsPartyMode] = useState(false);

  const handlePartyModeClick = () => {
    setIsPartyMode(!isPartyMode);
    setTimeout(() => {
      setIsPartyMode(false);
    }, 5000);
  };

  return (
    <Router>
      <div className="App">
        {isPartyMode && <ConfettiAnimation isPartyMode={isPartyMode} />}
        <Routes>
          <Route path="/" element={<DetailsPage />} />
          <Route
            path="/home"
            element={
              <>
                
                <Home handlePartyModeClick={handlePartyModeClick} />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
