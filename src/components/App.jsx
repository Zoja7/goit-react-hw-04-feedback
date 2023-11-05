import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import css from './App.module.css';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = event => {
    const name = event.target.name;
    switch (name) {
      case 'good': {
        setGood(prevState => prevState + 1);
        break;
      }
      case 'neutral': {
        setNeutral(prevState => prevState + 1);
        break;
      }
      case 'bad': {
        setBad(prevState => prevState + 1);
        break;
      }
      default:
        return;
    }
  };

  const total = good + neutral + bad;
  const totalPercentage = 0 ? 0 : ((good / total) * 100).toFixed(1);

  const options = Object.keys({ good, neutral, bad });

  return (
    <div className={`${css.container} ${css.sectionWrapper}`}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleClick} />
      </Section>

      <Section title="Statistics">
        {good !== 0 || neutral !== 0 || bad !== 0 ? (
          <Statistics
            feedback={{ good, neutral, bad }}
            total={total}
            positivePercentage={totalPercentage}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

export default App;
