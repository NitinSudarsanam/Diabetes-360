"use client"

import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import Navigation from '@/app/components/Navigation';

// Styled Components

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #111;
  color: #fff;
  font-family: 'Arial', sans-serif;
  padding: 40px;
`;

const Header = styled.header`
  background: linear-gradient(135deg, #ff66cc, #00ccff);
  width: 100%;
  padding: 20px;
  text-align: center;
  font-size: 2em;
  font-weight: bold;
  border-bottom: 5px solid #fff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #222;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  margin-top: 20px;
  width: 100%;
  max-width: 500px;
`;

const InputField = styled.input`
  width: 80%;
  padding: 12px;
  margin: 10px 0;
  background-color: #444;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 1.2em;
`;

const Button = styled.button`
  background-color: #ff3399;
  color: white;
  border: none;
  padding: 12px 30px;
  font-size: 1.5em;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background-color: #00ccff;
    transform: scale(1.05);
  }
`;

const SignUpPage: NextPage = () => {
  // States for form input
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  // Hydration fix: useEffect to delay client-specific logic
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // This will only be set after component mounts
  }, []);

  // SignUp form submission handler
  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === confirmPassword) {
      // Handle form submission here (e.g., send to API)
      console.log('Form Submitted:', { name, email, password });
    } else {
      alert("Passwords do not match!");
    }

    const fetchData = async () => {
      const formData = { name, email, password }
      try {
        const response = await fetch('http://localhost:4000/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          alert('Form submitted successfully');
        } else {
          alert('Error submitting form');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error submitting form');
      }
    }
  };

  // Prevent rendering the page until mounted on client side
  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Navigation />
      <Header>Sign Up</Header>

      <FormContainer>
        <form onSubmit={handleSignUp}>
          <InputField
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <InputField
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <InputField
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <InputField
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <Button type="submit">Sign Up</Button>
        </form>
      </FormContainer>
    </Container>
  );
};

export default SignUpPage;