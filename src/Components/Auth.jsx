import { useState } from "react";
import "./Auth.css";

function LoginForm({ onLogin }) {
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const entered = e.target.user.value.trim();
    const pass = e.target.pass.value;
    const stored = JSON.parse(localStorage.getItem("Account"));

    if (!stored) {
      setError("No account found. Please sign up first.");
      return;
    }

    if ((entered === stored.user || entered === stored.username) && pass === stored.pass) {
      onLogin();
    } else {
      setError("Incorrect username or password.");
    }
  }

  return (
    <>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input type="text" name="user" placeholder="Phone number, username, or email" required />
        <input type="password" name="pass" placeholder="Password" required />
        {error && <p style={{ color: "#ff4d4d", fontSize: "13px", textAlign: "center" }}>{error}</p>}
        <button className="auth-btn" type="submit">Log in</button>
      </form>
      <div className="auth-divider"><span /><p>OR</p><span /></div>
      <button className="auth-fb-btn">Log in with Facebook</button>
      <p className="auth-forgot">Forgot password?</p>
    </>
  );
}

function SignupForm({ switchToLogin }) {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const fullName = e.target.name.value.trim();
    const username = e.target.username.value.trim();
    const password = e.target.pass.value;

    if (!email || !fullName || !username || !password) {
      setError("All fields are required.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    localStorage.setItem("Account", JSON.stringify({ user: email, name: fullName, username, pass: password }));
    setSuccess(true);
    setTimeout(() => switchToLogin(), 1200);
  }

  return (
    <>
      <p className="auth-subtitle">Sign up to see photos and videos from your friends.</p>
      <button className="auth-fb-btn">Sign up with Facebook</button>
      <div className="auth-divider"><span /><p>OR</p><span /></div>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Mobile number or email" required />
        <input type="text" name="name" placeholder="Full name" required />
        <input type="text" name="username" placeholder="Username" required />
        <input type="password" name="pass" placeholder="Password" required minLength={8} />
        {error && <p style={{ color: "#ff4d4d", fontSize: "13px", textAlign: "center" }}>{error}</p>}
        {success && <p style={{ color: "#57d67e", fontSize: "13px", textAlign: "center" }}>Account created! Redirecting…</p>}
        <button className="auth-btn" type="submit">Sign up</button>
      </form>
      <p className="auth-terms">
        By signing up, you agree to our <strong>Terms</strong>, <strong>Privacy Policy</strong>, and <strong>Cookies Policy</strong>.
      </p>
    </>
  );
}

export default function Auth({ onAuthSuccess }) {
  const [mode, setMode] = useState("signup");

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-logo">Instagram</h1>
        {mode === "login"
          ? <LoginForm onLogin={onAuthSuccess} />
          : <SignupForm switchToLogin={() => setMode("login")} />
        }
      </div>
      <div className="auth-switch-card">
        {mode === "login"
          ? <p>Don&apos;t have an account? <button onClick={() => setMode("signup")}>Sign up</button></p>
          : <p>Have an account? <button onClick={() => setMode("login")}>Log in</button></p>
        }
      </div>
    </div>
  );
}
