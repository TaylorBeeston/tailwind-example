import React, { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    Meteor.loginWithPassword(username, password);
  };

  return (
    <form onSubmit={onSubmit} className="login-form">
      <label htmlFor="username">
        <input
          type="text"
          placeholder="Username"
          name="username"
          required
          onChange={(e) => setUsername(e.currentTarget.value)}
        />
        Username
      </label>

      <label htmlFor="password">
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        Password
      </label>

      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;
