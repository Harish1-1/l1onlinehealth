
import React from 'react';
import './WhyChooseUs.css';

function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <h2>Why Choose Us?</h2>
      <div className="features">
        <div className="feature-item">
          <h3>Expert Faculty</h3>
          <p>Our faculty has industry experience and academic experience that ensures that the students can learn from the best.</p>
        </div>
        <div className="feature-item">
          <h3>Complete Success Package</h3>
          <p>Learn from the best resources like books, video lessons, question banks, and more.</p>
        </div>
        <div className="feature-item">
          <h3>Placements</h3>
          <p>Resume building workshops, mock interviews, and placement drives that help you get placed at top companies.</p>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
