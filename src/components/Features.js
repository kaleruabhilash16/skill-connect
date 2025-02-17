import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <section className="features">
      <h2 className="core-features-heading">🚀 Core Features</h2>
      <div className="features-container">
        <div className="feature-card">
          <h3>📄 Skill Showcase</h3>
          <p>
            Create your profile and showcase your skills, projects, and
            achievements. Let others see what you bring to the table.
          </p>
        </div>

        <div className="feature-card">
          <h3>🤖 AI Doubt Resolution</h3>
          <p>
            Get instant answers to your coding and academic doubts with our
            AI-powered chatbot trained for student queries.
          </p>
        </div>

        <div className="feature-card">
          <h3>👥 Team Formation</h3>
          <p>
            Find the perfect teammates for your projects based on skills,
            interests, and compatibility.
          </p>
        </div>

        <div className="feature-card">
          <h3>💬 Real-Time Chat</h3>
          <p>
            Communicate instantly with your project members using our built-in
            real-time chat system.
          </p>
        </div>

        <div className="feature-card">
          <h3>🔍 Project Discovery</h3>
          <p>
            Browse and join exciting projects from other students to
            collaborate, learn, and grow.
          </p>
        </div>

        <div className="feature-card">
          <h3>🎓 Learning Paths</h3>
          <p>
            AI-powered learning paths suggest the best courses and resources to
            help you master new skills.
          </p>
        </div>

        <div className="feature-card">
          <h3>💡 Idea Incubator</h3>
          <p>
            Share project ideas, get feedback, and turn your concepts into
            real-world applications.
          </p>
        </div>

        <div className="feature-card">
          <h3>🔔 Smart Notifications</h3>
          <p>
            Stay updated with new project invites, team messages, and trending
            opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
