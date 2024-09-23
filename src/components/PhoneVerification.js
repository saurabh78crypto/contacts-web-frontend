import React, { useState } from 'react';
import { Form, Button, Alert, Container } from 'react-bootstrap';

const PhoneVerification = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);

  const startVerification = async () => {
    setMessage('');
    setError('');

    try {
      const response = await fetch('https://contacts-web-backend.onrender.com/api/start-verification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phoneNumber }),
      });

      if (response.ok) {
        setMessage('OTP has been sent to your phone.');
        setIsOtpSent(true);
      } else {
        throw new Error('Failed to start verification.');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const verifyOtp = async () => {
    setMessage('');
    setError('');

    try {
      const response = await fetch('https://contacts-web-backend.onrender.com/api/check-verification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phoneNumber, code: otp }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setMessage('Phone number verified successfully!');
          resetForm(); 
        } else {
          setError('Invalid OTP.');
          setOtp(''); 
        }
      } else {
        throw new Error('Failed to verify OTP.');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const resetForm = () => {
    setPhoneNumber('');
    setOtp('');
    setIsOtpSent(false);
  };

  return (
    <Container>
      <h2>Phone Number Verification</h2>
      {message && <Alert variant="success">{message}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}
      <Form>
        <Form.Group controlId="phoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="+1234567890"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            disabled={isOtpSent}
          />
        </Form.Group>
        {isOtpSent && (
          <Form.Group controlId="otp">
            <Form.Label>OTP</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </Form.Group>
        )}
        {isOtpSent ? (
          <Button variant="primary" onClick={verifyOtp} className="mt-3">
            Verify OTP
          </Button>
        ) : (
          <Button variant="primary" onClick={startVerification} className="mt-3">
            Start Verification
          </Button>
        )}
      </Form>
    </Container>
  );
};

export default PhoneVerification;
