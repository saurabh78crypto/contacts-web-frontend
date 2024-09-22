import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, Button, Row, Col, Alert } from 'react-bootstrap';
import contacts from '../data/contacts.json';
import './ContactDetail.css'; 

const ContactDetail = () => {
  const { phone } = useParams();
  const contact = contacts.find(c => c.phone === phone);
  const navigate = useNavigate();

  if (!contact) return <Alert variant="danger">Contact not found</Alert>;

  return (
    <Card className="mt-4">
      <Card.Body>
        <Row>
          <Col xs={12} md={4} className="text-center">
            <div className="avatar-placeholder">
              <h1>{contact.firstName.charAt(0)}{contact.lastName.charAt(0)}</h1>
            </div>
          </Col>
          <Col xs={12} md={8}>
            <Card.Title>{contact.firstName} {contact.lastName}</Card.Title>
            <Card.Text>
              <strong>Phone:</strong> {contact.phone}
            </Card.Text>
            <Button 
              variant="primary" 
              size="lg" 
              onClick={() => navigate(`/compose/${phone}/${contact.firstName} ${contact.lastName}`)}
            >
              Send Message
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ContactDetail;
