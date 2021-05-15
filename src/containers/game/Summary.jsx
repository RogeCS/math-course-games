import React from "react";
import Badge from "./Badge.jsx";
import "../../assets/styles/containers/Game.scss";

class Summary extends React.PureComponent {
  componentDidMount() {
    // Hide the summary initially until it's rendered once to skip the initial bounce up animation
    this.mounted = true;
  }

  render() {
    const { show, score, onPlayAgain } = this.props;
    return (
      <div
        className={`summary ${false ? "hidden" : ""} animated ${
          show ? "bounceInDown" : "bounceOutUp"
        }`}
      >
        <div className="title">
          <div className="big">!Buen trabajo!</div>
          Tu puntuación:
        </div>
        <Badge score={score} />
        <div className="button" onClick={onPlayAgain}>
          OTRA VEZ
        </div>
      </div>
    );
  }
}
export default Summary;
