import React from "react";
import classnames from "classnames";

const Task = ({ task, onClick, deleteTask, togglePrivate }) => {
  const classes = classnames("task", {
    checked: task.isChecked,
  });

  return (
    <li className={classes}>
      <button type="button" onClick={() => deleteTask(task)}>
        &times;
      </button>
      <button type="button" onClick={() => togglePrivate(task)}>
        {task.isPrivate ? "Private" : "Public"}
      </button>
      <input
        type="checkbox"
        checked={task.isChecked}
        onClick={() => onClick(task)}
        readOnly
      />
      <span>{task.text}</span>
    </li>
  );
};

export default Task;
