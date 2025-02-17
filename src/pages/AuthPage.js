import React, { useState } from "react";
import { auth, db } from "../config/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import "./Auth.css";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        await setDoc(doc(db, "users", user.uid), {
          email: user.email,
          createdAt: new Date(),
        });
      }
      navigate("/logged-homepage");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-page">
      {/* Left Side (Form Section) */}
      <div className="auth-container">
        <div className="auth-toggle">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>

        <h2>{isLogin ? "Welcome back" : "Join SkillConnect"}</h2>
        <p className="auth-subtext">Login to continue to VIT-AP SkillConnect</p>
        {error && <p className="error">{error}</p>}

        {/* Social Login Buttons */}
        <button className="social-btn">
          <FaGithub /> Continue with GitHub
        </button>
        <button className="social-btn">
          <FaGoogle /> Continue with Google
        </button>

        <div className="divider">OR CONTINUE WITH</div>

        {/* Email Login/Signup Form */}
        <form onSubmit={handleAuth}>
          <label>Username</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="primary-btn">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
      </div>

      {/* Right Side (Branding Section) */}
      <div className="auth-info">
        <h1>VIT-AP SkillConnect</h1>
        <p>
          Connect with peers, showcase your skills, and find the perfect team
          for your next project. Powered by AI to help you grow and succeed.
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
