"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NextPage } from 'next';
import styled from 'styled-components';
import Navigation from '@/app/components/Navigation';
import { useRouter } from 'next/navigation'; 

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
  const [age, setAge] = useState('');
  const [bloodSugar, setBloodSugar] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  // Hydration fix: useEffect to delay client-specific logic
  const [isClient, setIsClient] = useState(false);

  const router = useRouter(); // Move useRouter hook here

  useEffect(() => {
    setIsClient(true); // This will only be set after component mounts
  }, []);

  // SignUp form submission handler
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    const formData = { email, password, name, age, bloodSugar, height, weight };
  
    try {
      // Send the formData to the backend via POST request
      const response = await axios.post('http://localhost:4000/api/signup', formData, {
        headers: { "Content-Type": "application/json" }
      });
  
      console.log('Form submitted successfully:', response.data);
      router.push('/dashboard');  // Redirect after successful signup
    } catch (error) {
      console.error('Error submitting form:', error);
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

          <InputField
            type="age"
            placeholder="What is your Age?"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
          <InputField
            type="bloodSugar"
            placeholder="What is your Blood Sugar?"
            value={bloodSugar}
            onChange={(e) => setBloodSugar(e.target.value)}
            required
          />
          <InputField
            type="height"
            placeholder="What is your Height?"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
          <InputField
            type="weight"
            placeholder="What is your Weight?"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />

          <Button type="submit">Sign Up</Button>
        </form>
      </FormContainer>
    </Container>
  );
};

export default SignUpPage;