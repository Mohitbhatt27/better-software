import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";

const App: React.FC = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      <SignUpForm />
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};

export default App;
