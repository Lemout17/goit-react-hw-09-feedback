import { Component, useState } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import s from './App.module.scss';
import 'modern-normalize/modern-normalize.css';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const totalFeedback = good + neutral + bad;
  const positiveFeedbackPercentage = Math.round((good / totalFeedback) * 100);

  const increment = e => {
    const { name } = e.target;

    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        break;
    }
  };

  const object = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const options = Object.keys(object);

  return (
    <div className={s.container}>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={increment}
        ></FeedbackOptions>
      </Section>

      {totalFeedback > 0 ? (
        <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPercentage}
          ></Statistics>
        </Section>
      ) : (
        <Notification message={'No feedback given'} />
      )}
    </div>
  );
};

export default App;
