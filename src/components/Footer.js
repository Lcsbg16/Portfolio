import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";
import GithubIcon from "@material-ui/icons/GitHub";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.linkedin.com/in/lucs-barbosa/" target="_blank"><LinkedInIcon /></a> 
        <a href="mailto:lucasbarbosaguimaraes2016@gmail.com" target="_blank"><EmailIcon /></a>
        <a href="https://github.com/Lcsbg16" target="_blank"><GithubIcon /></a>
        <a href="https://www.instagram.com/lucas16.png/" target="_blank"><InstagramIcon /></a>
        
      </div>
      <p> &copy; 2023 lucasbg.com</p>
    </div>
  );
}

export default Footer;