import React from "react";

const Task = ({ task, onClick, deleteTask, togglePrivate }) => (
  <li className="flex items-center h-8 px-2 border border-gray-300">
    <button
      className="mr-2 text-2xl bg-transparent border-none outline-none cursor-pointer"
      type="button"
      onClick={() => deleteTask(task)}
    >
      &times;
    </button>
    <button
      className="mr-2 bg-transparent border-none outline-none cursor-pointer"
      type="button"
      onClick={() => togglePrivate(task)}
    >
      {task.isPrivate ? "Private" : "Public"}
    </button>
    <input
      className="mr-2"
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
