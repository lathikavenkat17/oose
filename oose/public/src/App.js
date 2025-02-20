import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Ppt from './Ppt';
import Video from './Video';
import Quiz from './Quiz';

function App() {
  return (
    <Router>
      <div>
        <NavBar /> {/* This will always be visible */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Ppt" element={<Ppt />} />
          <Route path="/Video" element={<Video />} />
          <Route path="/Quiz" element={<Quiz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

