import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="profile">
      <div className="left">
        <div className="content">
          <h1>Tijani Ridwan</h1>
          <h3>Front-End Developer</h3>
          <div className="skills">
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
            <li>REACT</li>
            <li>ANGULAR</li>
          </div>
          <div className="bio">
            <h3>About Me</h3>
            <p>
              I am web developer specializing in frontend technologies.I focus on
              writing responsive and accessible HTML , using modern CSS practice
              and writing clean javascript code. I mostly use React and Angular
              but I can adapt to whatever tool is required. I am based in Lagos
              Nigeria, but I am happy to work remotely. When am not coding
              you'll find me outdoor or painting. I love playing and watching
              football also.
            </p>
          </div>
        </div>
      </div>
      <div className="right">
        <Link to="/portfolio">
          <p>&gt;</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
