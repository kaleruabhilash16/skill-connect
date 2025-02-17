import React from "react";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <section className="how-container">
      {/* Hero Section */}
      <div className="how-hero">
        <h1 className="how-title">How It Works ?</h1>
        <p className="how-subtext">
          Learn how you can connect, collaborate, and work on amazing projects
          with SkillConnect.
        </p>
      </div>

      {/* Steps Section */}
      <div className="how-steps-container">
        <div className="how-step-card">
          <h3>Step 1: Create a Profile</h3>
          <p>Add your skills, experience, and interests.</p>
        </div>
        <div className="how-step-card">
          <h3>Step 2: Post or Browse Projects</h3>
          <p>List your idea or explore existing ones.</p>
        </div>
        <div className="how-step-card">
          <h3>Step 3: Connect & Apply</h3>
          <p>Engage with project owners and apply.</p>
        </div>
        <div className="how-step-card">
          <h3>Step 4: Start Collaborating</h3>
          <p>Use chat, file sharing, and built-in coding tools.</p>
        </div>
      </div>

      {/* Why Join Us Section */}
      <section className="how-why-join">
        <h2 className="how-why-title">Why Join Us?</h2>
        <div className="how-benefits-container">
          <div className="how-benefit-card">
            <h3>🚀 Turn Ideas into Reality</h3>
            <p>Bring your project ideas to life with the right team.</p>
          </div>
          <div className="how-benefit-card">
            <h3>🤝 Meet Talented People</h3>
            <p>
              Connect with like-minded developers, designers, and innovators.
            </p>
          </div>
          <div className="how-benefit-card">
            <h3>📈 Grow Your Skills</h3>
            <p>Work on real-world projects to enhance your expertise.</p>
          </div>
          <div className="how-benefit-card">
            <h3>🌟 Gain Recognition</h3>
            <p>Showcase your projects and build your professional portfolio.</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HowItWorks;
