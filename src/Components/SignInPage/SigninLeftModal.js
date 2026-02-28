import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignInLeftModal = () => {
  const [form, setForm] = useState({ gmail: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignIn = async () => {
    try {
      // 🔥 Get all users from backend
      const response = await fetch("http://localhost:5000/users");
      const users = await response.json();

      // 🔥 Find matching user
      const user = users.find(
        (u) => u.gmail === form.gmail && u.password === form.password
      );

      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/dashboard");
      } else {
        alert("Email / password is incorrect or Create an account.");
        navigate("/signup");
      }
    } catch (error) {
      console.error(error);
      alert("Error signing in");
    }
  };

  return (
    <div className="p-8 bg-white w-[25rem] h-[30rem] rounded-l-2xl">
      <h2 className="text-4xl font-bold text-gray-800 mb-2">
        <span className="text-blue-500 text-6xl font-semibold ml-24">S</span>ign
        <span className="text-blue-500 text-6xl font-semibold"> I</span>n
      </h2>

      <p className="text-sm text-gray-600 mb-14 h-7 mt-3 ml-24">
        Use email and password
      </p>

      <input
        name="gmail"
        type="email"
        placeholder="Email"
        value={form.gmail}
        onChange={handleChange}
        className="w-full mt-[0.2rem] border px-3 py-2 rounded-md"
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        className="w-full mt-5 border px-3 py-2 rounded-md"
      />

      <div className="text-right mr-[6.5rem] mt-4 text-sm text-black cursor-pointer">
        Forgot Password?
      </div>

      <button
        onClick={handleSignIn}
        className="w-32 mt-7 bg-blue-500 text-white py-2 ml-28 rounded-xl hover:bg-blue-600"
      >
        SIGN-IN
      </button>
    </div>
  );
};

export default SignInLeftModal;