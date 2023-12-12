import { useState, useEffect } from "react";
import "./styles.css";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [animationState, setAnimationState] = useState("slide-in");

  const toggleForm = () => {
    setAnimationState("slide-out");
  };

  useEffect(() => {
    if (animationState === "slide-out") {
      const timer = setTimeout(() => {
        setIsLogin(!isLogin);
        setAnimationState("slide-in");
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [animationState, isLogin]);

  return (
    <div className="container">
      <form
        className={`box ${animationState}`}
        key={isLogin ? "login" : "register"}
      >
        {isLogin ? (
          <>
            <h2>Login</h2>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="button">Log In</button>
            <p onClick={toggleForm}>Need an account? Register</p>
          </>
        ) : (
          <>
            <h2>Register</h2>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="button">Register</button>
            <p onClick={toggleForm}>Have an account? Login</p>
          </>
        )}
      </form>
    </div>
  );
};

export default Login;
