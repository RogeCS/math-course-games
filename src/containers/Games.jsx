import React from "react";
import ScrollToTop from "../code/scrollToTop";
import Game from "./game/Game.jsx";
import HeaderUser from "../components/HeaderUser.jsx";
import "../assets/styles/containers/Game.scss";

const Games = () => {
  ScrollToTop();
  return (
    <div className="body-game">
      <HeaderUser />
      <Game />
    </div>
  );
};

export default Games;
