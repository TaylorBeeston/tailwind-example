import React from "react";

const Task = ({ task, onClick, deleteTask, togglePrivate }) => (
  <li className="flex items-center h-8">
    <button
      className="bg-transparent border-none outline-none cursor-pointer"
      type="button"
      onClick={() => deleteTask(task)}
    >
      &times;
    </button>
    <button
      className="bg-transparent border-none outline-none cursor-pointer"
      type="button"
      onClick={() => togglePrivate(task)}
    >
      {task.isPrivate ? "Private" : "Public"}
    </button>
    <input
      type="checkbox"
      checked={task.isChecked}
      onClick={() => onClick(task)}
      readOnly
    />
    <span className={`flex-grow ${task.isChecked ? "line-through" : ""}`}>
      {task.text}
    </span>
  </li>
);

export default Task;
