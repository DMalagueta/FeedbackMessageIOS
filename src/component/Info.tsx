import FeedbackMessage from "./feedbackmessage";
import React from "react";

export default function Info() {
  const [showFeedback, setShowFeedback] = React.useState(false);

  const handleShowFeedback = () => {
    setShowFeedback(true);
    setTimeout(() => {
      setShowFeedback(false);
    }, 5000);
  };

  return (
    <>
      <button onClick={handleShowFeedback} className="btn-info">Info</button>
      <FeedbackMessage
        message="This is a info message"
        type="info"
        duration={5000}
        isOpen={showFeedback}
      />
    </>
  );
}
