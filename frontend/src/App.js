import React from 'react';
import HomePage from './pages/HomePage.js';
import Tour from './pages/Tour.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PostContent from './pages/PostContent.js';
import { useEffect, useState } from "react";


function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000")
      .then(response => response.text())
      .then(data => setMessage(data));
  }, []);
  
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/tour" element={<Tour />}></Route>
        <Route path="/questions/:id" element={<PostContent />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
