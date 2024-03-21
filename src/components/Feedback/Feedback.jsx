import App from "../../App";

const Feedback = ({ feedbackTypes, totalFeedback }) => {
  if (totalFeedback === 0) {
    return <div>No feedback yet</div>;
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
