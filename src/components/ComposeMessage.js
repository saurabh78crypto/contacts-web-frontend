import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Form, Alert, Container } from 'react-bootstrap';

const ComposeMessage = () => {
  const { phone, name } = useParams();
  const [message, setMessage] = useState(`Hi. ${name}. Your OTP is: ${Math.floor(100000 + Math.random() * 900000)}`);
  const [error, setError] = useState('');

  const sendMessage = async () => {
    setError('');
    if (!message.trim()) {
      setError('Message cannot be empty.');
      return;
    }

    try {
      const response = await fetch('https://contacts-web-backend.onrender.com/api/send-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, message, name }),
      });

      if (response.ok) {
        alert('Message sent successfully!');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container>
      <h2 className="mt-4">Compose Message</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form>
        <Form.Group controlId="messageText">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
          />
        </Form.Group>
        <Button variant="primary" onClick={sendMessage} className="mt-2">Send</Button>
      </Form>
    </Container>
  );
};

export default ComposeMessage;
