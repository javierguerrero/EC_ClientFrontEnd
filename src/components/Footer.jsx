import React from "react";
import "./styles/Footer.css";

class Footer extends React.Component {
  render() {
    return (
        <footer className="footer">
            <div className="container">
                <span className="text-muted">
                    {new Date().getFullYear()} <span>Everyday Conversantions</span>
                </span>
            </div>
      </footer>
    );
  }
}

export default Footer;