import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";

import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Olá, Meu Nome é Lucas Barbosa &#x1F44B;</h2>
        <div className="prompt">
          <p>Sou um desenvolvedor de 21 anos. Comecei a programar quando tinha 17, e estou interessado em desenvolvimento Web ou Mobile.</p>
          <a href="https://www.linkedin.com/in/lucs-barbosa/" target="_blank"><LinkedInIcon /></a> 
          <a href="mailto:lucasbarbosaguimaraes2016@gmail.com" target="_blank"><EmailIcon /></a>
          <a href="https://github.com/Lcsbg16" target="_blank"><GithubIcon /></a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, JavaScript, HTML, CSS, Angular, TypeScript
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              Java, PHP, C++, Python, MySQL
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
