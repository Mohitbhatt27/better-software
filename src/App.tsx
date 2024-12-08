import React from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";

const App: React.FC = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <SignUpForm />
      <LoginForm />
    </div>
  );
};

export default App;
