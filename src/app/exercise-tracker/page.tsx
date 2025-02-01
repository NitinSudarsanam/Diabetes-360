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

const ExerciseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #222;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  margin-top: 20px;
  width: 100%;
  max-width: 900px;
`;

const ExerciseLogContainer = styled.div`
  width: 100%;
  margin: 20px 0;
  padding: 15px;
  background: #333;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const ExerciseTitle = styled.h2`
  font-size: 1.8em;
  color: #ff3399;
  margin-bottom: 15px;
`;

const ExerciseBox = styled.div`
  width: 90%;
  background: #444;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  margin-bottom: 15px;
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

const ExerciseTrackerPage: NextPage = () => {
  // Initialize an empty array for the exercise log
  const [exerciseLog, setExerciseLog] = useState<any[]>([]);
  const [isClient, setIsClient] = useState(false);

  // Hydration fix: Only run this code on the client side (after mount)
  useEffect(() => {
    setIsClient(true); // Set the client state to true after mounting
    // You can add dynamic logic here to load exercise data, for example from an API
  }, []);

  // Sample exercise data (can be replaced with dynamic data)
  const sampleExercises = [
    {
      date: '2025-02-01',
      type: 'Walking',
      duration: '30 minutes',
      caloriesBurned: 200
    },
    {
      date: '2025-02-02',
      type: 'Cycling',
      duration: '45 minutes',
      caloriesBurned: 350
    },
    {
      date: '2025-02-03',
      type: 'Swimming',
      duration: '30 minutes',
      caloriesBurned: 250
    }
  ];

  // Log exercise button handler
  const handleLogExercise = () => {
    // You can replace this with dynamic input from the user (e.g., a form)
    setExerciseLog([...exerciseLog, ...sampleExercises]);
  };

  // Prevent rendering until mounted on client side
  if (!isClient) {
    return <div>Loading...</div>; // This is to avoid SSR mismatches
  }

  return (
    <Container>
      <Navigation />
      <Header>Exercise Tracker</Header>

      <ExerciseContainer>
        <ExerciseTitle>Your Exercise Log</ExerciseTitle>

        {exerciseLog.map((exercise, index) => (
          <ExerciseLogContainer key={index}>
            <ExerciseBox>
              <p><strong>Date:</strong> {exercise.date}</p>
              <p><strong>Type of Exercise:</strong> {exercise.type}</p>
              <p><strong>Duration:</strong> {exercise.duration}</p>
              <p><strong>Calories Burned:</strong> {exercise.caloriesBurned} kcal</p>
            </ExerciseBox>
          </ExerciseLogContainer>
        ))}

        <ArcadeButton onClick={handleLogExercise}>Log Exercise</ArcadeButton>
      </ExerciseContainer>
    </Container>
  );
};

export default ExerciseTrackerPage;