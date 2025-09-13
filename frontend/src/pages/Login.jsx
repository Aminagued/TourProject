import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const history = useNavigate();

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login process (replace with actual API call)
    setTimeout(() => {
      if (email === "user@example.com" && password === "password123") {
        // Store user data in localStorage (simulate login)
        localStorage.setItem(
          "user",
          JSON.stringify({
            id: 1,
            name: "John Doe",
            email: email,
            avatar: "https://source.unsplash.com/random/100x100/?portrait",
          })
        );
        localStorage.setItem("isAuthenticated", "true");

        // Redirect to profile page
        history.push("/profile");
      } else {
        setError("Invalid email or password");
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h2>Welcome Back</h2>
          <p>Sign in to your account</p>
        </div>

        <form onSubmit={onSubmit} className="login-form">
          {error && <div className="error-message">{error}</div>}

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={onChange}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={onChange}
              required
              placeholder="Enter your password"
              minLength="6"
            />
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" /> Remember me
            </label>
            <a href="#forgot" className="forgot-password">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="login-btn" disabled={isLoading}>
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="login-footer">
          <p>
            Don't have an account? <Link to="/register">Sign up</Link>
          </p>
        </div>

        <div className="demo-credentials">
          <p>Demo credentials:</p>
          <p>Email: user@example.com</p>
          <p>Password: password123</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
