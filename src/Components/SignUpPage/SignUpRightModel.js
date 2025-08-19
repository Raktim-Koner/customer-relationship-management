import React, { useState } from "react";
import { API_URL, API_KEY } from "../../Api.js";
import { useNavigate } from "react-router-dom";

const SignUpRightModel = () => {
  const [form, setForm] = useState({ name: "", gmail: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignUp = async () => {
    try {
      const response = await fetch(API_URL, {
        method: "GET",
        headers: {
          "X-Master-Key": API_KEY,
        },
      });

      const data = await response.json();
      const users = data.record || [];

      // ✅ Check if email already exists (case-insensitive)
      const userExists = users.some(
        (user) => user.gmail.toLowerCase() === form.gmail.toLowerCase()
      );

      if (userExists) {
        alert("Account already exists!");
        return; // ❌ Stop signup if email exists
      }

      // Add new user if not exist
      const newUsers = [...users, form];

      await fetch(API_URL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": API_KEY,
        },
        body: JSON.stringify(newUsers),
      });

      // Save user in localStorage (to show in UserIcon later)
      localStorage.setItem("user", JSON.stringify(form));

      alert("Account Created Successfully!");
      navigate("/dashboard"); // 🚀 Redirect to dashboard
    } catch (error) {
      console.error(error);
      alert("Error creating account");
    }
  };

  return (
    <div className="p-8 bg-white w-[25rem] h-[30rem] rounded-r-2xl">
      <h2 className="text-4xl font-bold text-gray-800 mb-2 text-center">
        <span className="text-blue-500 text-6xl">C</span>reate{" "}
        <span className="text-blue-500 text-6xl">A</span>ccount
      </h2>

      <input
        name="name"
        onChange={handleChange}
        type="text"
        placeholder="Name"
        className="w-full mt-5 border px-3 py-2 rounded-md"
      />
      <input
        name="gmail"
        onChange={handleChange}
        type="email"
        placeholder="Email"
        className="w-full mt-5 border px-3 py-2 rounded-md"
      />
      <input
        name="password"
        onChange={handleChange}
        type="password"
        placeholder="Password"
        className="w-full mt-5 border px-3 py-2 rounded-md"
      />

      <button
        onClick={handleSignUp}
        className="w-32 ml-[7rem] mt-7 bg-blue-500 text-white py-2 rounded-xl shadow-md hover:bg-blue-600"
      >
        SIGN-UP
      </button>
    </div>
  );
};

export default SignUpRightModel;
