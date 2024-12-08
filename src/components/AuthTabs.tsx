import React, { useState } from "react";
import "../App.css";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const AuthTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");

  return (
    <div className="container">
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === "login" ? "active" : ""}`}
          onClick={() => setActiveTab("login")}
        >
          Login
        </button>
        <button
          className={`tab-button ${activeTab === "signup" ? "active" : ""}`}
          onClick={() => setActiveTab("signup")}
        >
          Sign Up
        </button>
      </div>
      <div className="form-content">
        {activeTab === "login" ? <LoginForm /> : <SignUpForm />}
      </div>
    </div>
  );
};

export default AuthTabs;
