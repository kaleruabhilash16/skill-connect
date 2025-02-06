import React from "react";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps-container">
        <div className="step-card">
          <h3>Step 1: Create a Profile</h3>
          <p>Add your skills, experience, and interests.</p>
        </div>
        <div className="step-card">
          <h3>Step 2: Post or Browse Projects</h3>
          <p>List your idea or explore existing ones.</p>
        </div>
        <div className="step-card">
          <h3>Step 3: Connect & Apply</h3>
          <p>Engage with project owners and apply.</p>
        </div>
        <div className="step-card">
          <h3>Step 4: Start Collaborating</h3>
          <p>Use chat, file sharing, and built-in coding tools.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
