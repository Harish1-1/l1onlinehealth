
import React from 'react';
import { Container, Modal, Button } from 'react-bootstrap';
import Header from './components/Header';
import BecomeACCA from './components/BecomeACCA';
import WhyChooseUs from './components/WhyChooseUs';
import WhatYouLearn from './components/WhatYouLearn';
import PlacementAssistance from './components/PlacementAssistance';
import KickOffJourney from './components/KickOffJourney';
import Eligibility from './components/Eligibility';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [showModal, setShowModal] = React.useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <Container>
      <Header />
      <BecomeACCA handleShow={handleShow} />
      <WhyChooseUs />
      <Eligibility />
      <WhatYouLearn />
      <PlacementAssistance />
      <KickOffJourney handleShow={handleShow} />
      <Footer />

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your request has been submitted successfully!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default App;
