import React from 'react';
import './Courses.css';

const Courses = () => {
  return (
    <section className="course-section">
      <h2>Discover a better way to build a future-proof SAP Career</h2>
      <p>We offer easy-to-understand customized courses to keep learners engaged, motivated and supported to expand their digital learning pathways.</p>
      <div className="course-cards">
        <div className="card">
          <h3>I want to Join in the SAP Industry</h3>
          <p>Yes Of Course! Beginner to advanced courses available.</p>
          <button>Enquiry Now</button>
        </div>
        <div className="card">
          <h3>I want to Upgrade Skills for Job</h3>
          <p>Yes Absolutely! Learn the Latest Technology for your Growth.</p>
          <button>Enquiry Now</button>
        </div>
        <div className="card">
          <h3>I want to Master in Demand Skill</h3>
          <p>Yes Definitely! Join our Bootcamp for Career Success.</p>
          <button>Enquiry Now</button>
        </div>
        <div className="card">
          <h3>I want to be Job Savvy</h3>
          <p>Yes you will! Our courses are designed to help you to be a sought-after professional.</p>
          <button>Enquiry Now</button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
