import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import "./styles/Layout.css";

function Layout(props) {
  return (
    <React.Fragment>
      <div className="super_container">
        <Header />
        <div className="body_contaier">{props.children}</div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default Layout;
