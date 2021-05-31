import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const defaultUserState = {
  username: "",
  password: "",
  email: "",
};
const Register = () => {
  const [userRegistration, setUserRegistration] = useState(defaultUserState);
  const handleInput = (event) => {
    const name = event.target.name;

    const value = event.target.value;

    setUserRegistration({ ...userRegistration, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some(
      (user) => user.email === userRegistration.email
    );
    if (!userExists) {
      users.push({ ...userRegistration, id: uuidv4() });
      localStorage.setItem("users", JSON.stringify(users));
      alert("User registered successfully");
      setUserRegistration(defaultUserState);
    } else {
      alert("user exists!");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <label>
          <p>Username</p>
          <input
            type="text"
            autoComplete="off"
            id="username"
            name="username"
            value={userRegistration.username}
            onChange={handleInput}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            autoComplete="off"
            id="password"
            name="password"
            value={userRegistration.password}
            onChange={handleInput}
          />
        </label>
        <label>
          <p>Email</p>
          <input
            type="email"
            autoComplete="off"
            id="email"
            name="email"
            value={userRegistration.email}
            onChange={handleInput}
          />
        </label>
        <div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
