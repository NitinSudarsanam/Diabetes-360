"use client"

import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend, ChartOptions } from 'chart.js';
import styled from 'styled-components';
import Navigation from '@/app/components/Navigation';
import ArcadeButton from '@/app/components/ArcadeButton';

// Register required components
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

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

const BloodSugarChart: React.FC = () => {
  useEffect(() => {
    // Dynamically add the Google Font to the head
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap';
    document.head.appendChild(link);

    // Clean up the link when the component is unmounted
    return () => {
      document.head.removeChild(link);
    };
  }, []); // Empty dependency array means this runs only once when the component mounts

  const data = {
    labels: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00'],
    datasets: [
      {
        label: 'Blood Sugar (mg/dL)',
        data: [90, 105, 120, 130, 125, 140, 110],
        fill: false,
        borderColor: 'rgba(255,0,255,1)', 
        tension: 0,
        pointRadius: 5,
        pointBackgroundColor: 'rgba(255,0,255,1)',
        borderWidth: 4,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          font: {
            family: 'Press Start 2P', // Use the pixelated font
            size: 14,
            weight: 'bold',
          },
          color: 'white',
        },
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: 'rgba(0,0,0,0.7)',
        titleColor: 'cyan',
        bodyColor: 'lime',
        borderColor: 'white',
        borderWidth: 2,
        padding: 8,
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.raw} mg/dL`;
          },
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255,255,255,0.2)',
          lineWidth: 2,
        },
        ticks: {
          font: {
            family: 'Press Start 2P', 
            size: 16,
            weight: 'bold',
          },
          color: 'white',
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255,255,255,0.2)',
          lineWidth: 2,
        },
        ticks: {
          font: {
            family: 'Press Start 2P', 
            size: 16,
            weight: 'bold',
          },
          color: 'white',
        },
      },
    },
    elements: {
      line: {
        tension: 0,
      },
    },
    animation: {
      duration: 1000,
    },
    layout: {
      padding: 20,
    },
    backgroundColor: 'black',
  };

  return (
    <div>
      <h2 style={{ color: 'white', fontFamily: 'Press Start 2P', fontSize: '24px' }}>Blood Sugar Over Time</h2>
      <Line data={data} options={options} />
    </div>
  );
};

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
      <BloodSugarChart />

      <ArcadeButton onClick={() => alert("Navigating to another page...")}>
        Update Information
      </ArcadeButton>
    </Container>
  );
};

export default DashboardPage;