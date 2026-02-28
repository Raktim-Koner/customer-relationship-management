import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpRightModel = () => {
  const [form, setForm] = useState({ name: "", gmail: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignUp = async () => {
    try {
      // 🔥 Get existing users from backend
      const res = await fetch("http://localhost:5000/users");
      const users = await res.json();

      // 🔥 Check if email already exists
      const userExists = users.some(
        (user) => user.gmail.toLowerCase() === form.gmail.toLowerCase()
      );

      if (userExists) {
        alert("Account already exists!");
        return;
      }

      // 🔥 Send new user to backend
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(form));
        alert("Account Created Successfully!");
        navigate("/dashboard");
      } else {
        alert(data.error || "Signup failed");
      }

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
        value={form.name}
        onChange={handleChange}
        type="text"
        placeholder="Name"
        className="w-full mt-5 border px-3 py-2 rounded-md"
      />

      <input
        name="gmail"
        value={form.gmail}
        onChange={handleChange}
        type="email"
        placeholder="Email"
        className="w-full mt-5 border px-3 py-2 rounded-md"
      />

      <input
        name="password"
        value={form.password}
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