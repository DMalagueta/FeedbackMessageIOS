import FeedbackMessage from "./feedbackmessage";
import React from "react";

export default function Warning() {
  const [showFeedback, setShowFeedback] = React.useState(false);

  const handleShowFeedback = () => {
    setShowFeedback(true);
    setTimeout(() => {
      setShowFeedback(false);
    }, 5000);
  };

  return (
    <>
      <button onClick={handleShowFeedback} className="btn-warning">Warning</button>
      <FeedbackMessage
        message="This is a success message"
        type="warning"
        duration={5000}
        isOpen={showFeedback}
      />
    </>
  );
}
