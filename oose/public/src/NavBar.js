import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className='home'>Home</Link>
      <Link to="/Ppt" className='ppt'>PPT</Link>
      <Link to="/Video" className='video'>Video</Link>
      <Link to="/Quiz" className='quiz'>Quiz</Link>
    </nav>
  );
}

export default NavBar;
