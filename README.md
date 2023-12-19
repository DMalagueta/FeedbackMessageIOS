# Feedback Message

URL: https://dmalagueta.github.io/feedbackmessageios/

![image](https://github.com/DMalagueta/FeedbackMessageIOS/assets/84686081/a6541c07-d91c-4ee0-a58a-c98c184cae35)

The FeedbackMessage component is a React component designed to display feedback messages with an IOS animation. It provides a user-friendly way to convey success, error, warning, or information messages to the user, along with an optional progress bar to indicate the remaining time for the message to disappear. 

## Installation

You can install the `CodePreview` component via npm or yarn:

```bash
npm install
```

# Usage
To use the FeedbackMessage component in your React application, import it and include it in your code. You can provide the following props:

- message (string): The content of the feedback message.
- type ('success' | 'error' | 'warning' | 'info'): The type of feedback message, influencing its appearance and icon.
- duration (number, optional): The duration (in milliseconds) the message stays visible before automatically dismissing. Defaults to 3000 milliseconds (3 seconds).
- isOpen (boolean): the state of the feedback message.

Here's an example of how to use the FeedbackMessage:

```js
 <FeedbackMessage
    message="This is a success message"
    type="success"
    duration={5000}
    isOpen={showFeedback}
/>
```

# Running the Project
To run the project using Vite, use the following command:
```
npm run dev
# or
yarn dev
```
