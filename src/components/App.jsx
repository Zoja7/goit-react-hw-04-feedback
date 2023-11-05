import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import css from './App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = event => {
    const name = event.target.name;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedbacks = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedbacks();
    return total === 0 ? 0 : ((good / total) * 100).toFixed(1);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedbacks(good, neutral, bad);
    const totalPercentage = this.countPositiveFeedbackPercentage(total, good);
    const options = Object.keys(this.state);

    return (
      <div className={`${css.container} ${css.sectionWrapper}`}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleClick}
          />
        </Section>

        <Section title="Statistics">
          {good !== 0 || neutral !== 0 || bad !== 0 ? (
            <Statistics
              feedback={this.state}
              total={total}
              positivePercentage={totalPercentage}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
