import "./App.css";
import { useState } from "react";

import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Description from "./components/Description/Description";

function App() {
  const [feedbackTypes, setFeedbackTypes] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const totalFeedback =
    feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;

  const updateFeedback = (feedbackType) => {
    setFeedbackTypes({
      ...feedbackTypes,
      [feedbackType]: feedbackTypes[feedbackType] + 1,
    });
  };

  const onReset = () => {
    setFeedbackTypes({
      good: 0,
      bad: 0,
      neutral: 0,
    });
  };

  const positive = Math.round((feedbackTypes.good / totalFeedback) * 100);

  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        onReset={onReset}
      />
      <Feedback
        feedbackTypes={feedbackTypes}
        totalFeedback={totalFeedback}
        positive={positive}
      />
    </div>
  );
}

export default App;
