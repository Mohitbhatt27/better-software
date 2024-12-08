import React from "react";
import "./App.css";
import AuthTabs from "./components/AuthTabs";

const App: React.FC = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <AuthTabs />
    </div>
  );
};

export default App;
