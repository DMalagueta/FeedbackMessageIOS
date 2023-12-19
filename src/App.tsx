import React from "react";
import FeedbackMessage from "./component/FeedbackMessage";

interface FeedbackType {
  type: "info" | "success" | "error" | "warning";
  message: string;
}

function App() {
  const [showFeedback, setShowFeedback] = React.useState(false);
  const [feedbackType, setFeedbackType] = React.useState<FeedbackType>({
    type: "info",
    message: "This is a info message",
  });

  const handleShowFeedback = (
    type: "info" | "success" | "error" | "warning",
    message: string
  ) => {
    setFeedbackType({
      type,
      message,
    });

    setShowFeedback(true);
    setTimeout(() => {
      setShowFeedback(false);
    }, 5000);
  };

  return (
    <div className="main-container">
      <div className="content">
        <h1>Feedback messages</h1>
        <div className="btn-container">
          <button
            onClick={() =>
              handleShowFeedback("success", "This is a success message")
            }
            className="btn-success"
          >
            Success
          </button>
          <button
            onClick={() => handleShowFeedback("info", "This is a info message")}
            className="btn-info"
          >
            Info
          </button>
        </div>
        <div className="btn-container">
          <button
            onClick={() =>
              handleShowFeedback("warning", "This is a warning message")
            }
            className="btn-warning"
          >
            Warning
          </button>
          <button
            onClick={() =>
              handleShowFeedback("error", "This is a error message")
            }
            className="btn-error"
          >
            error
          </button>
        </div>

        <FeedbackMessage
          message={feedbackType.message}
          type={feedbackType.type}
          duration={5000}
          isOpen={showFeedback}
        />
      </div>
    </div>
  );
}

export default App;
