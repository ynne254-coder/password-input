import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function PasswordInput() {
  function handlePasswordChange(event) {
    console.log("Password is being typed:", event.target.value);
  }

  function handleButtonMouseEnter() {
    console.log("Mouse entered the Submit Password button");
  }

  function handleButtonMouseLeave() {
    console.log("Mouse left the Submit Password button");
  }

  return (
    <main className="page">
      <section className="card">
        <h1>Password Input</h1>
        <p>Type a password and test the button mouse events.</p>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          onChange={handlePasswordChange}
        />
        <button
          type="button"
          onMouseEnter={handleButtonMouseEnter}
          onMouseLeave={handleButtonMouseLeave}
        >
          Submit Password
        </button>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PasswordInput />
  </React.StrictMode>,
);
