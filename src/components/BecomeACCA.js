// src/components/BecomeACCA.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import './BecomeACCA.css';

function BecomeACCA({ handleShow }) {
  return (
    <section className="become-acca">
      <Fade left>
        <Card className="acca-card">
          <Card.Body>
            <Card.Title>Become ACCA In 18 months</Card.Title>
            <Card.Text>Arjuna (globally recognized accounting qualification ACCA, often called as Global CA), and get placed into MNCs & Big4s. Begin ACCA prep with IFRS now.</Card.Text>
            <div className="stats">
              <div className="stat-item">
                <h3>Experiences</h3>
                <p>30,770</p>
              </div>
              <div className="stat-item">
                <h3>Students</h3>
                <p>1,13,021</p>
              </div>
            </div>
            <Button variant="primary">Download Brochure</Button>
          </Card.Body>
        </Card>
      </Fade>
      <Fade right>
        <div className="call-back">
          <h3>Aspiring to be an ACCA? Get in touch with us!</h3>
          <form>
            <input type="text" placeholder="Phone Number" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Current Qualification" />
            <input type="text" placeholder="Interested In" />
            <Button variant="primary" type="button" onClick={handleShow}>Request Call Back</Button>
          </form>
        </div>
      </Fade>
    </section>
  );
}

export default BecomeACCA;
