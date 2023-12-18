import FeedbackMessage from "./FeedbackMessage";
import React from 'react'

export default function Error() {
  const [showFeedback, setShowFeedback] = React.useState(false);

  const handleShowFeedback = () => {
    setShowFeedback(true);
    setTimeout(() => {
      setShowFeedback(false);
    }, 5000); 
  };

  return (
    <>
      <button onClick={handleShowFeedback} className="btn-error">Error</button>
      <FeedbackMessage
        message="This is a error message"
        type="error"
        duration={5000} 
        isOpen={showFeedback} 
      />
    </>
  )
}

