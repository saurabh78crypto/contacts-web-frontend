import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import ContactsPage from './pages/ContactsPage';
import MessagesPage from './pages/MessagesPage';
import ContactDetail from './components/ContactDetail';
import ComposeMessage from './components/ComposeMessage';
import PhoneVerification from './components/PhoneVerification';

const App = () => {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/contacts">Contacts App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/contacts">Contacts</Nav.Link>
            <Nav.Link as={Link} to="/messages">Messages Sent</Nav.Link>
            <Nav.Link as={Link} to="/verify-phone">Verify Phone</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container className="mt-4">
        <h1>Welcome to the Contacts Web App</h1>
        <p>Manage your contacts and send messages effortlessly.</p>
      </Container>
      <Routes>
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/contact/:phone" element={<ContactDetail />} />
        <Route path="/compose/:phone/:name" element={<ComposeMessage />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/verify-phone" element={<PhoneVerification />} />
      </Routes>
    </Router>
  );
};

export default App;
