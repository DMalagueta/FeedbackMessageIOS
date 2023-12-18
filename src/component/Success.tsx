import FeedbackMessage from "./feedbackmessage";
import React from "react";

export default function Success() {
  const [showFeedback, setShowFeedback] = React.useState(false);

  const handleShowFeedback = () => {
    setShowFeedback(true);
    setTimeout(() => {
      setShowFeedback(false);
    }, 5000);
  };

  return (
    <>
      <button onClick={handleShowFeedback} className="btn-success">Success</button>
      <FeedbackMessage
        message="This is a success message"
        type="success"
        duration={5000}
        isOpen={showFeedback}
      />
    </>
  );
}
