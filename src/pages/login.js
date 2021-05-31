import React from "react";
import { useState } from "react";

const Login = () => {
  const [userDetails, setuserDetails] = useState({
    email: "",
    password: "",
  });
  const handleInput = (event) => {
    const name = event.target.name;

    const value = event.target.value;

    setuserDetails({ ...userDetails, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) =>
        user.email === userDetails.email &&
        user.password === userDetails.password
    );
    if (user) {
      localStorage.setItem("userDetails", JSON.stringify(user));
      window.location.reload();
    } else {
      alert("Please check your credentials ");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h3>Login</h3>

        <label>
          <p>email</p>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            value={userDetails.email}
            onChange={handleInput}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            value={userDetails.password}
            onChange={handleInput}
          />
        </label>
        <div>
          <button type="submit" className="btn btn-danger">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
