import React, { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    Meteor.loginWithPassword(username, password);
  };

  return (
    <form onSubmit={onSubmit} className="mt-8">
      <label htmlFor="username" className="block w-full mb-2 box-border">
        <input
          className="block w-full mb-3 box-border"
          type="text"
          placeholder="Username"
          name="username"
          required
          onChange={(e) => setUsername(e.currentTarget.value)}
        />
        Username
      </label>

      <label htmlFor="password" className="block w-full mb-2 box-border">
        <input
          className="block w-full mb-3 box-border"
          type="password"
          placeholder="Password"
          name="password"
          required
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        Password
      </label>

      <button className="float-right" type="submit">
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
