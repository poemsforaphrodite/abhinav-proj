import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ClientFeedback.css';

const feedbacks = [
  {
    name: 'Amit Gupta',
    role: 'SAP Consultant, Bangalore',
    feedback: 'Exceptional experience with the SAP Services. Well-structured courses, experienced instructors, and excellent support. Thank you!',
    stars: 5,
  },
  {
    name: 'Sunita Sharma',
    role: 'Salesforce Developer, Delhi',
    feedback: 'Completed the Salesforce Certification Training program recently. Solid foundation, hands-on projects, and expert guidance. Kudos to the team!',
    stars: 5,
  },
  {
    name: 'Rahul Singh',
    role: 'Data Scientist, Hyderabad',
    feedback: 'The data science training was thorough and covered all the essential aspects. The projects helped me gain practical experience.',
    stars: 4,
  },
  {
    name: 'Priya Verma',
    role: 'Web Developer, Mumbai',
    feedback: 'Great experience! The web development course was up-to-date with the latest technologies and best practices. Highly recommended!',
    stars: 5,
  },
  {
    name: 'Ankit Mehta',
    role: 'DevOps Engineer, Pune',
    feedback: 'The DevOps course provided a comprehensive understanding of the tools and methodologies. The instructors were knowledgeable and supportive.',
    stars: 4,
  },
];

const ClientFeedback = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="client-feedback">
      <h2>Clients Feedback</h2>
      <p>We always care for our clients and love to get good feedback from you. Take a look at what some of our clients think of us.</p>
      <Slider {...settings}>
        {feedbacks.map((feedback, index) => (
          <div key={index} className="feedback-card">
            <h3>{feedback.name}</h3>
            <h4>{feedback.role}</h4>
            <div className="stars">
              {'★'.repeat(feedback.stars)}{'☆'.repeat(5 - feedback.stars)}
            </div>
            <p>{feedback.feedback}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ClientFeedback;
