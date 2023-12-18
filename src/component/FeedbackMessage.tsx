import React, { useState, useEffect } from "react";
import "./feedbackmessage.css";

import successIcon from "../assets/success.svg";
import errorIcon from "../assets/error.svg";
import warningIcon from "../assets/warning.svg";
import infoIcon from "../assets/info.svg";

interface FeedbackMessageProps {
  message: string;
  type: "success" | "error" | "warning" | "info";
  duration?: number;
  isOpen: boolean;
}

const getIconByType = (type: "success" | "error" | "warning" | "info") => {
  switch (type) {
    case "success":
      return successIcon;
    case "error":
      return errorIcon;
    case "warning":
      return warningIcon;
    case "info":
      return infoIcon;
    default:
      return null;
  }
};

const FeedbackMessage: React.FC<FeedbackMessageProps> = ({
  message,
  type,
  duration = 8000,
  isOpen,
}) => {
  const [isVisible, setIsVisible] = useState(isOpen);
  const [progressWidth, setProgressWidth] = useState(100);

  const dismissMessage = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    setIsVisible(isOpen);

    if (isOpen) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, duration);
      const progressBarUpdateInterval = 50;
      const totalSteps = duration / progressBarUpdateInterval;
      let currentStep = 0;

      const progressBarTimer = setInterval(() => {
        currentStep += 1;
        const newProgressWidth =
          ((totalSteps - currentStep) / totalSteps) * 100;
        setProgressWidth(newProgressWidth);

        if (currentStep >= totalSteps) {
          clearInterval(progressBarTimer);
        }
      }, progressBarUpdateInterval);

      return () => {
        clearTimeout(timer);
        clearInterval(progressBarTimer);
      };
    }
  }, [duration, isOpen]);

  const icon = getIconByType(type);

  return (
    <div
      className={`feedback-message ${type} ${isVisible ? "visible" : ""}`}
      onClick={dismissMessage}
    >
      <div className="feedback-message__icon">
        {icon && <img src={icon} alt={`${type} Icon`} className="icon" />}
      </div>
      <div className="feedback-message__text">{message}</div>

      <div
        className="feedback-message__progress"
        style={{ width: `${progressWidth}%` }}
      ></div>
    </div>
  );
};

export default FeedbackMessage;
