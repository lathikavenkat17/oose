import React from 'react';
import './Home.css';

function Home() {
  return (
    <div>
    <div className="oose-container">
      <span className="letter">O</span>
      <span className="letter">O</span>
      <span className="letter">S</span>
      <span className="letter">E</span>
      <span className="letter space">&nbsp;</span>
      <span className="letter">P</span>
      <span className="letter">r</span>
      <span className="letter">o</span>
      <span className="letter">j</span>
      <span className="letter">e</span>
      <span className="letter">c</span>
      <span className="letter">t</span>
    </div>
    <div className='container'>
        <h1 className=''>USECASE Model Project</h1>
        <h2>About</h2>
        <p>In Object-Oriented Software Engineering (OOSE),
            a "use case" is a detailed description of how a user interacts with a system to achieve a 
            specific goal, outlining the steps involved, potential variations, and expected outcomes, 
            essentially acting as a blueprint for understanding how the system should function from the user's 
            perspective; it's a key tool for capturing functional requirements during the analysis phase of 
            software development.A use case is a description of how a system or product will be used by
            its users to achieve a specific goal or task. It outlines the interactions between the system
            and the user (or other systems) to achieve a desired outcome. Use cases are typically used in
            software development and system design to understand user requirements and how the system should 
            behave in different scenarios.
             </p>
    </div>
    <div>
    <h2 className='pres' style={{ color: 'black', display: 'block' }}>Presented By</h2>
    </div>
    <div>
    <div className='flex'>
    <div className="image-container">
  <img src="/sweet.png" alt="sweet" className="sweet" />
  <div className="hover-text">Jefina Sweety</div>
</div>
<div className="image-container">
  <img src="/kirthika.png" alt="kirthika" className="sweet" />
  <div className="hover-text">Kirthika</div>
</div>

<div className="image-container">
  <img src="/Deva.png" alt="deva" className="sweet" />
  <div className="hover-text">Devathadsani</div>
</div>

<div className="image-container">
  <img src="/Lathika.png" alt="lathika" className="sweet" />
  <div className="hover-text">Lathika</div>
</div>
</div>
</div>
    </div>
  );
}

export default Home;