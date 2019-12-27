import React, { useState } from "react";

const ClockInOutPanel = ({
  createNewTask = () => null,
  isExistingTaskInProgress = false,
  existingTaskDescription = ""
}) => {
  const [isTaskInProgress, updateTaskInProgress] = useState(
    isExistingTaskInProgress
  );

  const [taskDescription, updateTaskDescription] = useState(
    existingTaskDescription
  );

  return (
    <div>
      {isTaskInProgress ? (
        <div>
          <p>{taskDescription}</p>
          <button
            onClick={() => {
              updateTaskInProgress(false);
              updateTaskDescription("");
            }}
          >
            stop
          </button>
        </div>
      ) : (
        <div>
          <input
            value={taskDescription}
            onChange={event => updateTaskDescription(event.target.value)}
          />
          <button onClick={() => updateTaskInProgress(true)}>start</button>
        </div>
      )}
    </div>
  );
};

export default ClockInOutPanel;
