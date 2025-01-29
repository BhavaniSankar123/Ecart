import React, { useRef } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const checkMatch = (e) => {
    const error = document.getElementsByClassName("error")[0];
    e.preventDefault();
    fetch("http://localhost:5174/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.current.value,
        password: password.current.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          error.style.display = "none";
          console.log(data);
          navigate("/");
        } else {
          error.style.display = "block";
          error.innerHTML = data.message;
        }
      });
  };

  return (
    <form onSubmit={checkMatch}>
      <input type="email" ref={email} placeholder="Email" required />
      <input type="password" ref={password} placeholder="Password" required />
      <button type="submit">Login</button>
      <div className="error" style={{ display: "none" }}></div>
      <Link to="/register">Register</Link>
    </form>
  );
};

export default Login;
