import React from 'react';
import { ListGroup, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import contacts from '../data/contacts.json';
import './ContactList.css'; 

const ContactList = () => {
  const navigate = useNavigate();

  const handleSelectContact = (contact) => {
    navigate(`/contact/${contact.phone}`);
  };

  return (
    <Card className="mt-4">
      <Card.Body>
        <h5 className="text-center">Select a Contact</h5>
        <ListGroup>
          {contacts.map((contact) => (
            <ListGroup.Item 
              key={contact.phone} 
              onClick={() => handleSelectContact(contact)} 
              style={{ cursor: 'pointer' }} 
              className="contact-item"
            >
              <div className="contact-info">
                <span className="contact-name">{contact.firstName} {contact.lastName}</span>
                <span className="contact-phone">{contact.phone}</span>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default ContactList;
