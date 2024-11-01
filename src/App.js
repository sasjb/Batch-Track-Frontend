import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllNotice from "./Components/AllNotice";
import CreateNotice from "./Components/CreateNotice";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllNotice />} />
        <Route path="/create-notice" element={<CreateNotice/>} />
      </Routes>
    </Router>
  );
}

export default App;
