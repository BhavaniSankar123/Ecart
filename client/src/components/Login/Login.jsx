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
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <h1 className="text-red-500 text-2xl text-bold">Login</h1>
      <form
        onSubmit={checkMatch}
        className="h-96 w-96 flex flex-col gap-4 items-center border-2 border-black p-4"
      >
        <input
          type="email"
          className="border"
          ref={email}
          placeholder="Email"
          required
        />
        <input
          type="password"
          className="border"
          ref={password}
          placeholder="Password"
          required
        />
        <button type="submit" className="w-auto">
          Login
        </button>
        <div className="error" style={{ display: "none" }}></div>
        <p>Don't have an account?</p>
        <Link to="/register" className="hover:text-blue-500">
          Register
        </Link>
      </form>
    </div>
  );
};

export default Login;
