import React, { useState } from "react";

const TaskForm = () => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) return;

    Meteor.call("tasks.insert", text.trim());

    setText("");
  };

  return (
    <form
      className="relative mt-4 border border-gray-300 rounded"
      onSubmit={onSubmit}
    >
      <input
        className="w-full p-2 text-lg tracking-wide rounded outline-none"
        type="text"
        placeholder="Type to add new tasks"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        className="absolute top-0 right-0 flex items-center justify-center h-full px-2 bg-green-100 border-l border-gray-300 rounded-r"
        type="submit"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
