import App from "../../App";

const Feedback = ({ feedbackTypes }) => {
  const totalFeedback =
    feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;

  if (totalFeedback === 0) {
    return "No feedback yet";
  } else {
    return (
      <div>
        <p>Good: {feedbackTypes.good}</p>
        <p>Neutral: {feedbackTypes.neutral}</p>
        <p>Bad: {feedbackTypes.bad}</p>
      </div>
    );
  }
};

export default Feedback;
