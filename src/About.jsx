import React from "react";
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About TaskCraft</h1>
      </div>
      <div className="about-content">
        <p className="about-intro">
          Welcome to TaskCraft, your go-to platform for connecting with skilled artisans and getting tasks done efficiently. We're not just a service outsourcing platform; we're a community dedicated to delivering excellence and simplifying your search for reliable professionals.
          </p>
            <div className="about_highlights">
                <h2>Why TaskCraft?</h2>
                <ul>
                    <li>
                        <strong>Extensive Artisan Network:</strong> Explore a diverse range of skilled artisans, from electricians and mechanics to plumbers and more. Every artisan undergoes a thorough vetting process to ensure top-notch services.
                    </li>
                    <li>
                        <strong>Convenient Task Management:</strong> Say goodbye to the hassle of finding reliable artisans. Our user-friendly platform allows you to post tasks, connect with artisans, and manage your projects seamlessly.
                    </li>
                    <li>
                        <strong>Trust and Reliability:</strong> We prioritize trust and reliability. Each artisan is committed to delivering quality work, and we've implemented safeguards to ensure a secure and transparent experience.
                    </li>
                    <li>
                        <strong>Personalized Service Matching:</strong> Our advanced matching algorithm connects you with artisans based on your specific requirements, making it easy to find the perfect professional for your task.
                    </li>
                </ul>
            </div>
            <div className="about_how-it-works">
                <h2>How It Works</h2>
                <ol>
                    <li>
                        <strong>Post Your Task:</strong> Describe your task in detail, specifying your requirements and preferences.
                    </li>
                    <li>
                        <strong>Explore Artisans:</strong> Browse through our extensive artisan profiles and reviews to find the perfect match for your task.
                    </li>
                    <li>
                        <strong>Connect and Collaborate:</strong> Connect with artisans, discuss your project, and collaborate seamlessly through our messaging system.
                    </li>
                    <li>
                        <strong>Complete and Review:</strong> Once the task is completed, leave a review to help others in the community make informed decisions.
                    </li>
                </ol>
            </div>
            <p className="about_cta">
                Join TaskCraft today and experience the future of service outsourcing. Whether you're a customer seeking skilled professionals or an artisan looking to showcase your expertise, TaskCraft is where opportunities and talents converge.
            </p>
            <div className="about_buttons">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
