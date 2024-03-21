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

  return (
    <div>
      <Description />
      <Options />
      <Feedback feedbackTypes={feedbackTypes} />
    </div>
  );
}

export default App;
