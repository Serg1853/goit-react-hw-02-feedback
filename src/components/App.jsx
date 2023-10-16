import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = option =>
    this.setState(prevState => {
      // console.log('option', option);
      return {
        [option]: prevState[option] + 1,
      };
    });
  // handleClickGood = () =>
  //   this.setState(prevState => ({ good: prevState.good + 1 }));
  // handleClickNeutral = () =>
  //   this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  // handleClickBad = () =>
  //   this.setState(prevState => ({ bad: prevState.bad + 1 }));

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return Math.round((this.state.good * 100) / total);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    // console.log('options', options);
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage() || 0;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.addFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
