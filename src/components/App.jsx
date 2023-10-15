import { Component } from 'react';

export class App extends Component {
 
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleClickGood = () =>
    this.setState(prevState => ({ good: prevState.good + 1 }));
  handleClickNeutral = () =>
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  handleClickBad = () =>
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
 
  countTotalFeedback() {
    const total = this.setState(this.good + this.neutral + this.bad);
    return total;
  } 

  render() {
    return (
      <div>
        <div className="container">
          <p className="title">Please leave feedback</p>
          <button className="" type="button" onClick={this.handleClickGood}>
            Good
          </button>
          <button className="" type="button" onClick={this.handleClickNeutral}>
            Neutral
          </button>
          <button className="" type="button" onClick={this.handleClickBad}>
            Bad
          </button>
          <div className="statistics">
            <p className="title-statistics">Statistics</p>
            <p className="">Good: {this.state.good}</p>
            <p className="">Neutral: {this.state.neutral}</p>
            <p className="">Bad: {this.state.bad}</p>
            <p className="">Total: {this.total}</p>
            <p className="">Positive feedback: {}</p>
          </div>
        </div>
      </div>
    );
  }
}
