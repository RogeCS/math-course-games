import React from "react";
import Expression from "./Expression.jsx";
import GameHeader from "./GameHeader.jsx";
import MultipleChoice from "./MultipleChoice.jsx";
import Summary from "./Summary.jsx";
import "../../assets/styles/containers/Game.scss";

const TIME = 30; // Initial game duration, in seconds

class Game extends React.PureComponent {
  constructor(props) {
    super(props);

    const status = this.getInitialStatus();

    this.state = {
      status,
      selected: -1,
      showSummary: false,
      endTime: Date.now() + TIME * 1000,
      prev: this.generateProblem(status.max),
      next: this.generateProblem(status.max),
    };
  }

  getInitialStatus() {
    return {
      score: 0,
      max: 10,
      asked: 0,
      answered: 0,
      multiplier: 1,
    };
  }

  randomNumber(max) {
    return Math.floor(Math.random() * max);
  }

  generateProblem(max) {
    const a = this.randomNumber(max);
    const b = this.randomNumber(max - a);
    return { a, b, choices: this.getChoices(a, b, max) };
  }

  increaseScore() {
    const { status } = this.state;
    let endTime = this.state.endTime;
    let max = status.max;

    // Add time and increase max every 5 correct answers
    if (status.answered % 5 === 4) {
      endTime += 15000;
      max *= 2;
    }

    this.setState({
      endTime,
      status: {
        ...status,
        multiplier: Math.min(status.multiplier + 1, 5),
        score: status.score + max * status.multiplier,
        asked: status.asked + 1,
        answered: status.answered + 1,
        max,
      },
    });
  }

  decreaseScore() {
    const { status } = this.state;
    this.setState({
      status: {
        ...status,
        multiplier: 1,
        score: Math.max(0, status.score - Math.floor(status.max * 0.25)), // Decrease by MAX * <Correct Answer Probability>
        asked: status.asked + 1,
      },
    });
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  getChoices(a, b, max) {
    const result = a + b;
    const choices = [result];

    while (choices.length < 4) {
      const choice = this.randomNumber(max);
      if (!choices.includes(choice)) {
        choices.push(choice);
      }
    }
    return this.shuffle(choices);
  }

  handleOnClick = (value) => {
    const {
      prev: { a, b },
      selected,
    } = this.state;

    if (selected !== -1) return;

    if (value === a + b) {
      this.increaseScore();
    } else {
      this.decreaseScore();
    }

    this.setState({ selected: value });

    setTimeout(() => {
      this.setState({
        prev: this.state.next,
        next: this.generateProblem(this.state.status.max),
        selected: -1,
      });
    }, 1500);
  };

  handleOnTimerEnd = () => {
    this.setState({ showSummary: true });
  };

  handleOnPlayAgain = () => {
    const status = this.getInitialStatus();
    this.setState({
      status,
      showSummary: false,
      endTime: Date.now() + TIME * 1000,
      prev: this.generateProblem(status.max),
      next: this.generateProblem(status.max),
    });
  };

  render() {
    const { prev, next, status, selected, showSummary, endTime } = this.state;

    return (
      <div className="game-container">
        <GameHeader
          status={status}
          endTime={endTime}
          onTimerEnd={this.handleOnTimerEnd}
        />
        <div className="body">
          <Expression
            from={`${prev.a} + ${prev.b} = `}
            to={`${next.a} + ${next.b} = `}
            transitioning={selected !== -1}
          />
        </div>
        <div className="game-footer">
          <div className="container">
            <MultipleChoice
              values={prev.choices}
              selected={selected}
              onClick={this.handleOnClick}
              correct={selected === prev.a + prev.b}
            />
          </div>
        </div>
        <Summary
          show={showSummary}
          score={status.score}
          onPlayAgain={this.handleOnPlayAgain}
        />
      </div>
    );
  }
}
export default Game;
