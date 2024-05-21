import React from 'react';
import './LearningInfo.css';
import certificateImage from '../cerim.webp'; // Adjust the path to your image

const LearningInfo = () => {
  return (
    <section className="learning-info">
      <div className="content">
        <h2>What you will get at Zeblearnindia Learning?</h2>
        <p>Zeblearnindia Learning is your one-stop institute to learn SAP Online Training Courses, Web Designing, Data Science, Fullstack Developer, Salesforce, Workday, Machine Learning, software testing, and video editing. With the flexibility of choosing between online and classroom (offline) modes of learning, our comprehensive courses have been specifically designed for students, working professionals, businessmen, and entrepreneurs. Here’s what you’ll get at Zeblearnindia Learning:</p>
        <ul>
          <li>Trainers with 17+ years of experience</li>
          <li>100% Practical approach</li>
          <li>100% job placement assistance</li>
          <li>Highly-detailed learning material</li>
        </ul>
        <button className="view-courses">View Courses</button>
      </div>
      <div className="certificate">
        <img src={certificateImage} alt="Certificate of Excellence" />
      </div>
    </section>
  );
};

export default LearningInfo;
