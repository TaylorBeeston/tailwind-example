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
      <div className="max-w-md mx-auto my-0">
        <LoginForm />
      </div>
    );

  return (
    <main className="flex justify-center w-full pt-16">
      <div className="container p-8 pb-4 bg-white border border-gray-300 rounded backdrop-blur bg-opacity-50">
        <h1 className="w-full text-4xl font-bold tracking-wide text-center">
          Todo List ({incompleteTasksCount})
        </h1>

        <ul className="p-0 m-0 list-none grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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

        <div className="flex flex-row-reverse items-center w-full mt-4">
          <label>
            <input
              className="mr-1"
              type="checkbox"
              readOnly
              checked={hideCompleted}
              onClick={() => setHideCompleted(!hideCompleted)}
            />
            Hide completed
          </label>
        </div>
      </div>
    </main>
  );
};
