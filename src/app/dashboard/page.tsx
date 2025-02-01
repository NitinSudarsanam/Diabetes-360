"use client"

import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import Navigation from '@/app/components/Navigation';
import ArcadeButton from '@/app/components/ArcadeButton';

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
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
  backgroundImage: linear-gradient(
      rgba(0, 0, 0, 0.9) 1px, transparent 1px
    ), linear-gradient(90deg, rgba(0, 0, 0, 0.9) 1px, transparent 1px);
  color: white;
  border: none;
  padding: 12px 30px;
  font-size: 1.5em;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #00ccff;
    transform: scale(1.05);
  }
`;

const arcadeStyle = {
  color: "white",
  border: "3px solid #0056b3", /* Slightly darker blue for the border */
  padding: "12px 24px",
  fontSize: "1.2rem",
  cursor: "pointer",
  borderRadius: "6px", /* Slightly rounded corners */
  boxShadow: "0 0 2px #0056b3, 0 0 4px #007bff", /* Reduced glow effect */
  transition: "all 0.3s ease",

  /* Subtle blocky text shadow */
  textShadow: "0.5px 0.5px 0px #ff6600, 1px 1px 0px #ff3399",

  /* Grid background effect */
  backgroundImage:
    "linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px)",
  backgroundSize: "12px 12px", /* Pixel grid */
  backgroundColor: "#007bff", /* Button background color */
};


const DashboardPage: NextPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => { document.body.style.backgroundColor = 'red' }, [])

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

      <ArcadeButton onClick={() => alert("Navigating to another page...")}>
        Update Information
      </ArcadeButton>
    </Container>
  );
};

export default DashboardPage;