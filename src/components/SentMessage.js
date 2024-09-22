import React, { useState, useEffect } from 'react';
import { Table, Card } from 'react-bootstrap';

const SentMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/messages');
        const data = await response.json();
        setMessages(data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, []);

  return (
    <Card className="mt-4">
      <Card.Body>
        <Card.Title>Messages Sent</Card.Title>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>OTP</th>
              <th>Sent At</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg, index) => (
              <tr key={index}>
                <td>{msg.name || 'Unknown'}</td>
                <td>{msg.message.split(': ')[1]}</td>
                <td>{new Date(msg.timestamp).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default SentMessages;
