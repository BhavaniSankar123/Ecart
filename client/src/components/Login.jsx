import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

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
      <Link to="/" className="fixed top-4 left-4 border border-black rounded-full p-2">
        <BiArrowBack className="text-2xl text-blue-700 hover:text-blue-500 transition" />
      </Link>
      <div className="h-72 border-2 border-black p-4"
      >
        <h1 className=" text-2xl text-center text-bold mb-4">Login</h1>
        <form
          onSubmit={checkMatch}
        >
          <input
            type="email"
            className="border w-full px-3 py-2 mb-4"
            ref={email}
            placeholder="Email"
            required
          />
          <input
            type="password"
            className="border w-full px-3 py-2 mb-4"
            ref={password}
            placeholder="Password"
            required
          />
          <button type="submit" className=" px-3 py-1 bg-blue-500 text-white hover:bg-blue-600 transition">
            Login
          </button>
          <div className="error" style={{ display: "none" }}></div>
          <p className="text-center">Don't have an account?
            <Link to="/register" className="text-blue-700 hover:text-blue-500 ml-4">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
