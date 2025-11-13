# Project Requirements

Build a React application that features an advanced counter. The specific features are outlined below.

## Core Counter Functionality

- [x] Display Current Count: Show the current count, initialized to 0.
- [x] Increment Button: A button to increase the count by 1.
- [x] Decrement Button: A button to decrease the count by 1.

## Advanced Features

### History Tracking:

- [x] Keep a history of all count values. Every time the count changes, add the new count to an array of previous counts.
- [x] Display this history list to the user (e.g., “Previous counts: 0, 1, 2, 1, 2, 3”).

### Auto-Save Functionality:

- [x] Use useEffect to save the current count to local storage whenever it changes.
- [x] Ensure you handle potential race conditions or cleanup if the count changes again before the “save” completes. (Hint: cleanup function in useEffect).

### Keyboard Event Listeners:

- [x] Allow the user to increment the count by pressing the “ArrowUp” key.
- [x] Allow the user to decrement the count by pressing the “ArrowDown” key.
- [x] Use useEffect to add and remove these event listeners to the document.
- [x] Ensure event listeners are cleaned up when the component unmounts or is no longer active.

### Reset Mechanism:

- [x] Implement a button to reset the count back to 0.
- [x] This reset should also clear the tracked history of counts.

### Step Input:

- [x] Add an input field where the user can define a custom “step” value.
- [x] The increment and decrement buttons should then use this step value instead of 1.
- [x] Consider how changes to the step value affect the counter and its history.

## Implementation Guidelines

- [x] Create a new React component for your counter (e.g., AdvancedCounter.tsx).
- [x] Use useState to manage the current count, history array, and any other necessary local state.
- [x] Use useEffect for side effects like auto-saving and adding/removing keyboard event listeners.
- [x] Pay close attention to the dependency arrays in your useEffect hooks to control when they re-run.
- [x] Ensure all useEffect hooks that set up subscriptions or event listeners have proper cleanup functions.
