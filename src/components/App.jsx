import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Statistics from './Statisctics';
import css from './App.module.css';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedbackButton = e => {
    const name = e.target.name;

    switch (name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    };
  };

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
      return totalFeedback ? Math.round((good / totalFeedback) * 100) : 0;
  };

  const options = ['good', 'neutral', 'bad'];  

  return (
 <div className={css.feedback__container}>
         <Section title="Please leave feedback">
           <FeedbackOptions
            options={options}
            onLeaveFeedback={handleFeedbackButton}
            />
        </Section>

        <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
  )
}

export default App;