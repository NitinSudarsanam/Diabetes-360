"use client"

import React, { useEffect } from 'react';
import {
  Activity,
  Dumbbell,
  Timer,
  Flame,
  Trophy,
  Calendar,
  CalendarCheck
} from 'lucide-react';
import Navigation from '@/app/components/Navigation';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import {useGlobalState} from '../context/GlobalStateContext'; // Adjust the path based on your project structure
import { useRouter } from 'next/navigation';

// Register necessary components
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const ExerciseTracker = () => {
  const { globalState, setGlobalState } = useGlobalState();
  const router = useRouter();
  useEffect(() => {
    if (!globalState.isAuthenticated) {
      router.push('/login');
    }
  }, [globalState.isAuthenticated, router]);

  if (!globalState.isAuthenticated) {
    return <div>Loading...</div>;
  }

  const stats = {
    cardioLog: globalState.cardioLog,
    weightLog: globalState.weightLog,
    bloodSugar: globalState.bloodSugar,
    height: globalState.height,
    weight: globalState.weight,

  };
  
/*
  const stats = {
    height: "450 kcal",
    weight: "45 minutes",
    bloodSugar: "5 days",
    weeklyGoal: "5 workouts",
    yesterdayWorkout: "60 min workout",
    nextWorkout: "Tomorrow"
  };
*/
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

  const [workoutStats, setWorkoutStats] = React.useState({
    cardioMinutes: '',
    weightTrainingMinutes: '',
  });

  const handleWorkoutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setWorkoutStats(prev => ({ ...prev, [name]: value }));
  };

  const handleWorkoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Workout stats updated successfully!');
  };

  return (
    <div className="min-h-screen bg-sky-400 p-8 text-white font-mono" style={{
      backgroundImage: 'linear-gradient(transparent 95%, #7dd3fc 95%), linear-gradient(90deg, transparent 95%, #7dd3fc 95%)',
      backgroundSize: '40px 40px'
    }}>
      <Navigation />
      <h1 className="text-4xl font-bold text-center mb-8"
        style={{ textShadow: '3px 3px 0px #0369a1', padding: '80px 20px 20px' }}>
        EXERCISE LOG
      </h1>

      <div className="max-w-6xl mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {[
            { icon: Flame, label: "Height", value: stats.height },
            { icon: Timer, label: "Weight (lbs)", value: stats.weight },
            { icon: Activity, label: "Last Workout", value: "N/A" },
            { icon: CalendarCheck, label: "Weekly Goal", value: "5 Workouts" },
            { icon: Trophy, label: "Next Workout", value: "Tomorrow" },
            { icon: Calendar, label: "Blood Sugar", value: stats.bloodSugar }
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
                {stat.value}
              </p>
            </div>
          ))}
        </div>

{/* New Workout Input Section */}
<div className="rounded-lg p-6 mb-8" style={{
          background: 'linear-gradient(#34d399, #059669)',
          border: '4px solid #fff',
          boxShadow: '4px 4px 0px #065f46',
          opacity: 0.9
        }}>
          <h2 className="text-2xl font-bold mb-4" style={{ textShadow: '2px 2px 0px #1e40af' }}>
            Log Today&apos;s Workout To Level Up!
          </h2>
          <form onSubmit={handleWorkoutSubmit} className="space-y-4">
            <div className="flex items-center space-x-4">
              <Dumbbell className="w-6 h-6" />
              <input
                type="number"
                name="cardioMinutes"
                value={workoutStats.cardioMinutes}
                onChange={handleWorkoutChange}
                className="w-full p-3 rounded-lg text-black"
                placeholder="Enter cardio minutes"
              />
            </div>
            <div className="flex items-center space-x-4">
              <Dumbbell className="w-6 h-6" />
              <input
                type="number"
                name="weightTrainingMinutes"
                value={workoutStats.weightTrainingMinutes}
                onChange={handleWorkoutChange}
                className="w-full p-3 rounded-lg text-black"
                placeholder="Enter weight training minutes"
              />
            </div>
            <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Log Workout
            </button>
          </form>
        </div>

        <div className="rounded-lg p-6 mb-8" style={{
          background: 'linear-gradient(#60a5fa,rgb(49, 107, 232))',
          border: '4px solid #fff',
          boxShadow: '4px 4px 0px #1e40af',
          opacity: 0.9
        }}><PixelArtGraph /></div>

        {/* Achievement Unlocked */}
        <div className="rounded-lg p-6" style={{
          background: 'linear-gradient(#f472b6, #db2777)',
          border: '4px solid #fff',
          boxShadow: '4px 4px 0px #9d174d',
          opacity: 0.9
        }}>
          <h2 className="text-2xl font-bold mb-4" style={{ textShadow: '2px 2px 0px #9d174d' }}>
            Achievement Unlocked! 🎉
          </h2>
          <div className="flex items-center">
            <Trophy className="w-12 h-12 mr-4" />
            <div>
              <p className="text-xl font-bold">5-Day Streak Master</p>
              <p>Completed workouts for 5 consecutive days!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseTracker;