import React, { useState } from "react";
import { useTracker } from "meteor/react-meteor-data";
import Task from "./Task";
import { Tasks } from "/imports/api/tasks";
import TaskForm from "./TaskForm";
import LoginForm from "./LoginForm";

const toggleChecked = ({ _id, isChecked }) =>
  Meteor.call("tasks.setChecked", _id, !isChecked);

const deleteTask = ({ _id }) => Meteor.call("tasks.remove", _id);

const togglePrivate = ({ _id, isPrivate }) =>
  Meteor.call("tasks.setPrivate", _id, !isPrivate);

export const App = () => {
  const [hideCompleted, setHideCompleted] = useState(false);

  const filter = hideCompleted ? { isChecked: { $ne: true } } : {};

  const { tasks, incompleteTasksCount, user } = useTracker(() => {
    Meteor.subscribe("tasks");

    return {
      tasks: Tasks.find(filter, { sort: { createdAt: -1 } }).fetch(),
      incompleteTasksCount: Tasks.find({ isChecked: { $ne: true } }).count(),
      user: Meteor.user(),
    };
  });

  if (!user)
    return (
      <div className="simple-todos-react">
        <LoginForm />
      </div>
    );

  return (
    <div className="simple-todos-react">
      <h1>Todo List ({incompleteTasksCount})</h1>

      <div className="filters">
        <label>
          <input
            type="checkbox"
            readOnly
            checked={hideCompleted}
            onClick={() => setHideCompleted(!hideCompleted)}
          />
          Hide completed
        </label>
      </div>
      <ul className="tasks">
        {tasks.map((task) => (
          <Task
            key={task._id}
            task={task}
            onClick={toggleChecked}
            deleteTask={deleteTask}
            togglePrivate={togglePrivate}
          />
        ))}
      </ul>

      <TaskForm />
    </div>
  );
};
