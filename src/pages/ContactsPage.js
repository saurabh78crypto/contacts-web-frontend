import React from 'react';
import ContactList from '../components/ContactList';
import { Container } from 'react-bootstrap';

const ContactsPage = () => {
  return (
    <Container>
      <h1 className="mt-4 mb-4 text-center">Contacts</h1>
      <ContactList />
    </Container>
  );
};

export default ContactsPage;
