import React, { useState } from "react";

const GoalsPage = () => {
  const [goal, setGoal] = useState("");
  const [submittedGoal, setSubmittedGoal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedGoal(goal);
    setGoal("");
  };

  return (
    <div>
      <h2>Weekly Goals</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your goal:
          <input
            type="text"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            required
          />
        </label>
        <button type="submit">Post</button>
      </form>
      {submittedGoal && (
        <p>
          <strong>Your goal:</strong> {submittedGoal}
        </p>
      )}
    </div>
  );
};

export default GoalsPage;
