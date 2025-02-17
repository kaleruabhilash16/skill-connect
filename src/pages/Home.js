import React from "react";
import "./Home.css";
import Features from "../components/Features";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <section className="home-hero">
          <h1 className="home-title">
            Connect, Collaborate and Learn Together
          </h1>
          <p className="home-subtext">
            Join VIT-AP SkillConnect to find peers, share knowledge, and grow
            together in your learning journey.
          </p>
          <div className="home-hero-buttons">
            <button className="home-primary-btn">Get Started</button>
            <button className="home-secondary-btn">Explore Projects</button>
          </div>
        </section>
      </div>

      {/* Features Component */}
      <Features />
    </>
  );
};

export default Home;
