import React from "react";
import "../../assets/styles/containers/Game.scss";

class MultipleChoice extends React.PureComponent {
  render() {
    const { values, selected, correct, onClick } = this.props;
    return (
      <div className="multiple-choice">
        {values.map((res, index) => (
          <div
            key={index}
            className={`choice animated ${
              selected === res
                ? correct
                  ? "tada positive"
                  : "negative wobble"
                : ""
            }`}
            onClick={() => onClick(res)}
          >
            {res}
          </div>
        ))}
      </div>
    );
  }
}
export default MultipleChoice;
