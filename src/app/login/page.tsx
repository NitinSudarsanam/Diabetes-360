"use client"

import React, { useState } from 'react';
import axios from 'axios';
import { NextPage } from 'next';
import styled from 'styled-components';
import Navigation from '@/app/components/Navigation';
import { useRouter } from 'next/navigation'; // Correct import from 'next/router'

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

const LoginPage: NextPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:4000/api/login', { email, password }, {
        headers: { "Content-Type": "application/json" }
      });

      if (response.data.token) {
        localStorage.setItem('authToken', response.data.token); // Store token
        router.push('/dashboard'); // Redirect after successful login
      } else {
        setError('Login failed: No token received');
      }
    } catch (error) {
      setError('Login failed');
    }
  };


  return (
    <Container>
      <Navigation />
      <Header>Login</Header> {/* Adjusted header text */}

      <FormContainer>
        <form onSubmit={handleLogin}>
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
          <Button type="submit">Login</Button>
        </form>
      </FormContainer>
    </Container>
  );
};

export default LoginPage;