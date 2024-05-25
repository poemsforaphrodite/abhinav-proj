import React from 'react';
import './Placement.css';

const PlacementPartners = () => {
  return (
    <section className="placement-partners">
      <h2>1500+ PLACEMENT PARTNERS</h2>
      <p>Guaranteed Job Interviews upon course completion</p>
      <div className="partners">
        <div className="partner">
          <div className="border-top"></div>
          <h3>Resume Creation</h3>
          <p>On successful completion of the course including assignments & certifications, we work with the candidate to create an effective resume.</p>
          <div className="border-bottom"></div>
        </div>
        <div className="partner">
          <div className="border-top"></div>
          <h3>Job Application</h3>
          <p>The updated Resume is then shared with relevant organizations. On shortlisting, we follow-up with an initial round of discussion.</p>
          <div className="border-bottom"></div>
        </div>
        <div className="partner">
          <div className="border-top"></div>
          <h3>Interview Readiness</h3>
          <p>Based on the organizations & the profiles for which the candidate is shortlisted, we help the candidate prepare for the complete interview process.</p>
          <div className="border-bottom"></div>
        </div>
        <div className="partner">
          <div className="border-top"></div>
          <h3>Selection & Joining</h3>
          <p>After a successful interview, we guide the candidate from accepting the offer to joining the organization for a successful career.</p>
          <div className="border-bottom"></div>
        </div>
      </div>
      <div className="contact-info">
        <h3>GET CAREER CONSULTING</h3>
        <a href="tel:8882192787" className="contact-button">8882593576</a>
      </div>
    </section>
  );
};

export default PlacementPartners;
