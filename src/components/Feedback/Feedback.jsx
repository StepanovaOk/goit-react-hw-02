import styles from "./Feedback.module.css";

const Feedback = ({ feedbackTypes, totalFeedback, positive }) => {
  if (totalFeedback === 0) {
    return <div className={styles.message}>No feedback yet</div>;
  } else {
    return (
      <div className={styles.feedback_container}>
        <p className={styles.feedback}>Good: {feedbackTypes.good}</p>
        <p className={styles.feedback}>Neutral: {feedbackTypes.neutral}</p>
        <p className={styles.feedback}>Bad: {feedbackTypes.bad}</p>
        <p className={styles.feedback}>Total : {totalFeedback}</p>
        <p className={styles.feedback}>Positive: {positive}%</p>
      </div>
    );
  }
};

export default Feedback;
