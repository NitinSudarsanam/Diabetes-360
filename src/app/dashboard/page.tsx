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

const InfoBox = styled.div`
  background: #222;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
  width: 80%;
  max-width: 900px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
`;

const InfoTitle = styled.h2`
  font-size: 1.8em;
  color: #ff3399;
`;

const InfoText = styled.p`
  font-size: 1.2em;
  margin: 10px 0;
  color: #fff;
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

const DashboardPage: NextPage = () => {
  const [isClient, setIsClient] = useState(false);

  // Simulated user data (this could be fetched from an API)
  const userData = {
    name: "John Doe",
    age: 45,
    bloodSugarLevel: "120 mg/dL",
    dailyExercise: "30 minutes of walking",
  };

  // Hydration fix: useEffect to delay client-specific logic
  useEffect(() => {
    setIsClient(true); // Set client state after component mounts
  }, []);

  // Prevent rendering until mounted on client side
  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Navigation />
      <Header>Welcome to Your Dashboard</Header>

      <InfoBox>
        <InfoTitle>User Information</InfoTitle>
        <InfoText><strong>Name:</strong> {userData.name}</InfoText>
        <InfoText><strong>Age:</strong> {userData.age}</InfoText>
        <InfoText><strong>Blood Sugar Level:</strong> {userData.bloodSugarLevel}</InfoText>
        <InfoText><strong>Daily Exercise:</strong> {userData.dailyExercise}</InfoText>
      </InfoBox>

      <Button onClick={() => alert("Navigating to another page...")}>
        Update Information
      </Button>
    </Container>
  );
};

export default DashboardPage;