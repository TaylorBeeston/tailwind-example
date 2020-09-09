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
    <form className="flex mt-4" onSubmit={onSubmit}>
      <input
        className="flex-grow"
        type="text"
        placeholder="Type to add new tasks"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
