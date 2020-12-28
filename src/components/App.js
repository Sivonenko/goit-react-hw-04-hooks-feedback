import { useState } from 'react';

import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import { feedback_options } from '../data/constans';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };

  const handleaveFeedback = ({ target }) => {
    const feedback = target.dataset;
    switch (feedback) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
    }
  };

  // handleaveFeedback = ({ target }) => {
  //   const { feedback } = target.dataset;
  //   this.setState(prevState => ({ [feedback]: prevState[feedback] + 1 }));
  // };

  // render() {
  //   const { good, neutral, bad } = this.state;
  //   const total = this.countTotalFeedback();
  //   const positivePercentage = this.countPositiveFeedbackPercentage();
  //   const styles = {
  //     wrapper: {
  //       background: '#b1b1b1',
  //       width: '700px',
  //       margin: '0 auto',
  //     },
  //   };
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedback_options}
          onleaveFeedback={handleaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          total={countTotalFeedback}
          bad={bad}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      </Section>
    </div>
  );
}

export default App;
