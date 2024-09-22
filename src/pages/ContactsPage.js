import React from 'react';
import ContactList from '../components/ContactList';
import { Container } from 'react-bootstrap';

const ContactsPage = () => {
  return (
    <Container>
      <ContactList />
    </Container>
  );
};

export default ContactsPage;
