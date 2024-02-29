import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Instructions from "./components/Instructions";
import Quiz from "./components/Quiz";
import './App.css'

function App() {
  const [startTimer, setStartTimer] = useState(false);
  const [name, setName] = useState("");
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home setName={setName} name={name} />} />
          <Route
            path="/quiz"
            element={<Quiz startTimer={startTimer} setName={setName} />}
          />
          <Route
            path="/instructions"
            element={<Instructions setStartTimer={setStartTimer} name={name} />}
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
