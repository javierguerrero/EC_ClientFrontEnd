import React from "react";
import { HeaderContent } from "./HeaderContent";
import { TopBar } from "./TopBar";
import "./styles/Header.css";

export const Header = (props) => {
  return (
    <React.Fragment>
      <header class="header">
        <TopBar />
        <HeaderContent />
      </header>
    </React.Fragment>
  );
};
