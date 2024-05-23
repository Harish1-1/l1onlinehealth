
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Zoom } from 'react-reveal';
import './KickOffJourney.css';

function KickOffJourney({ handleShow }) {
  return (
    <section className="kick-off-journey">
      <Zoom>
        <Card className="journey-card">
          <Card.Body>
            <Card.Title>Kick off your ACCA Prep journey with IndigoLearn</Card.Title>
            <Card.Text>Sign in and get instant access to our FREE Courses</Card.Text>
            <Button variant="primary" onClick={handleShow}>Request Call Back</Button>
          </Card.Body>
        </Card>
      </Zoom>
    </section>
  );
}

export default KickOffJourney;
