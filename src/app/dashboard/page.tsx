"use client"

import { CalendarCheck, User, Ruler, Heart, BarChart2 } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import Navigation from '@/app/components/Navigation';
import { useRouter } from 'next/navigation';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import {useGlobalState} from '../context/GlobalStateContext'; // Adjust the path based on your project structure

// Register necessary components
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);
/*
const stats = {
  name: "John Doe",
  age: "30 Years",
  height: "5'8 Feet",
  weight: "160 lbs",
  bloodSugar: "120 mg/dL",
  diabetesDuration: "5 Years"
};*/


const NavigationButton = ({ destination, label }: { destination: string; label: string }) => {
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { globalState } = useGlobalState();
  useEffect(() => {
    if (!globalState.isAuthenticated) {
      router.push('/login');
    }
  }, [globalState.isAuthenticated, router]);

  if (!globalState.isAuthenticated) {
    return <div>Loading...</div>;
  }

  return (
    <button
      onClick={() => router.push(destination)}
      className="px-6 py-3 text-xl font-bold text-white border-4 border-white rounded-lg shadow-lg transition-transform transform hover:-translate-y-1"
      style={{
        background: "linear-gradient(#fcd34d, #f59e0b)",
        boxShadow: "4px 4px 0px #92400e",
        textShadow: "2px 2px 0px #92400e"
      }}
    >
      {label}
    </button>
  );
};

const DashboardPage: NextPage = () => {
  const [isClient, setIsClient] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { globalState, setGlobalState } = useGlobalState();
  const stats = {
    name: globalState.name,
    age: globalState.age,
    height: globalState.height,
    weight: globalState.weight,
    bloodSugar: globalState.bloodSugar,
    diabetesDuration: globalState.diabetesDuration
  };

  // Hydration fix: useEffect to delay client-specific logic
  useEffect(() => {
    setIsClient(true);
  }, []);

  const PixelArtGraph: React.FC = () => {
    useEffect(() => {
      // Load pixel font dynamically
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap';
      link.onload = () => {
        ChartJS.defaults.font.family = 'Press Start 2P';
      };
      document.head.appendChild(link);
      return () => {
        document.head.removeChild(link);
      };
    }, []);

    const data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [
        {
          label: 'Blood Sugar (mg/dL)',
          data: [80, 150, 100, 200, 130],
          borderColor: '#f59e0b', // Golden Yellow
          backgroundColor: '#7dd3fc', // Neon green dots
          borderWidth: 10, // Thicker line
          pointRadius: 12, // Big square dots
          pointStyle: 'rect', // Square points (for pixel look)
          pointBackgroundColor: '#7dd3fc', // Cyan dots
          pointBorderColor: '#bae6fd', // Darker Cyan
          pointBorderWidth: 4,
        },
      ],
    };

    const options = {
      responsive: true,
      plugins: {
        legend: {
          display: false, // Hide legend
        },
        tooltip: {
          enabled: false, // Disable tooltips
        },
      },
      scales: {
        x: {
          grid: {
            color: 'white', // White grid for retro feel
            lineWidth: 3,
          },
          ticks: {
            font: { family: 'Courier New', size: 14, weight: 'bold' as const },
            color: 'white',
          },
          title: {
            display: true,
            text: 'Months',
            font: { family: 'Courier New', size: 16, weight: 'bold' as const },
            color: 'white',
          },
        },
        y: {
          grid: {
            color: 'white', // White grid for retro feel
            lineWidth: 3,
          },
          ticks: {
            font: { family: 'Courier New', size: 14, weight: 'bold' as const },
            color: 'white',
          },
          title: {
            display: true,
            text: 'Blood Sugar (mg/dL)',
            font: { family: 'Courier New', size: 16, weight: 'bold' as const },
            color: 'white',
          },
        },
      },
      elements: {
        line: {
          tension: 0, // No smoothing for pixelated look
        },
        point: {
          hoverRadius: 12, // Keep the same size when hovered
        },
      },
    };

    return (
      <div style={{ padding: 20 }}>
        <h2 style={{ color: 'white', fontFamily: 'Press Start 2P', fontWeight: 'bold', fontSize: '24px' }}> Blood Sugar By Month</h2>
        <Line data={data} options={options} />
      </div>
    );
  };

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-sky-400 p-8 text-white font-mono"
      style={{
        backgroundImage: 'linear-gradient(transparent 95%, #7dd3fc 95%), linear-gradient(90deg, transparent 95%, #7dd3fc 95%)',
        backgroundSize: '40px 40px'
      }}
    >
      <Navigation />

      <h1 className="text-4xl font-bold text-center mb-8"
        style={{ textShadow: '3px 3px 0px #0369a1', padding: '80px 20px 20px' }}>
        PLAYER STATS
      </h1>

      <div className="max-w-6xl mx-auto flex-grow">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[ 
            { icon: User, label: "Name", value: stats.name },
            { icon: CalendarCheck, label: "Age", value: stats.age },
            { icon: Ruler, label: "Height", value: stats.height },
            { icon: BarChart2, label: "Weight", value: stats.weight },
            { icon: Heart, label: "Blood Sugar", value: stats.bloodSugar },
            { icon: CalendarCheck, label: "Diabetes Duration", value: stats.diabetesDuration }
            ].map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded transform hover:-translate-y-1 transition-transform"
              style={{
              background: 'linear-gradient(#fcd34d, #f59e0b)',
              border: '4px solid #fff',
              boxShadow: '4px 4px 0px #92400e',
              opacity: 0.9
              }}
            >
              <div className="flex items-center mb-2">
              <stat.icon className="w-8 h-8 mr-3" />
              <h2 className="text-xl font-bold">{stat.label}</h2>
              </div>
              <p className="text-3xl font-bold" style={{ textShadow: '2px 2px 0px #92400e' }}>
              {stat.value === 0 ? '-' : stat.value}
              </p>
            </div>
            ))}
        </div>

        {/* Navigation Button - Always at the Bottom */}
        <div className="w-full flex justify-center py-6">
          <NavigationButton destination="/update-stats" label="Update Stats" />
        </div>

        {/* Pixel Art Graph */}
        <div className="rounded-lg p-6 mb-8" style={{
          background: 'linear-gradient(#60a5fa,rgb(49, 107, 232))',
          border: '4px solid #fff',
          boxShadow: '4px 4px 0px #1e40af',
          opacity: 0.9
        }}><PixelArtGraph /></div>

        {/* Recent Activity */}
        <div className="rounded-lg p-6" style={{
          background: 'linear-gradient(#34d399, #059669)',
          border: '4px solid #fff',
          boxShadow: '4px 4px 0px #065f46',
          opacity: 0.9
        }}>
          <h2 className="text-2xl font-bold mb-4" style={{ textShadow: '2px 2px 0px #1e40af' }}>
            Recent Quests
          </h2>
          <div className="space-y-4">
            {[
              "Completed 30 min cardio quest",
              "Logged breakfast - Oatmeal power-up",
              "Took morning medication",
              "Checked blood sugar level",
              "Updated weekly meal plan"
            ].map((activity, index) => (
              <div
                key={index}
                className="p-4 rounded"
                style={{
                  background: 'linear-gradient(#60a5fa, #2563eb)',
                  border: '2px solid #fff',
                  boxShadow: '2px 2px 0px #1e40af'
                }}
              >
                <p className="flex items-center">
                  <CalendarCheck className="w-5 h-5 mr-2" />
                  {activity}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;