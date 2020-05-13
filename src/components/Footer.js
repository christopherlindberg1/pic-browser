import "./Footer.css";
import React from "react";


const Footer = props => {
  const text = props.text === undefined ? "\u00A9 Christopher Lindberg 2020" : props.text;

  return (
    <footer className="footer">
      {text}
    </footer>
  );
}


export default Footer;