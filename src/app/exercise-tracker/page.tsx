"use client"

import React from 'react';
import { 
  Activity, 
  Dumbbell, 
  Timer, 
  Flame, 
  Trophy,
  Calendar,
  CalendarCheck,
  ArrowUp,
  ArrowDown
} from 'lucide-react';
import Navigation from '@/app/components/Navigation';

const ExerciseTracker = () => {
  const stats = {
    caloriesBurned: "450 kcal",
    workoutTime: "45 minutes",
    currentStreak: "5 days",
    weeklyGoal: "4/5 workouts",
    personalBest: "60 min workout",
    nextWorkout: "Tomorrow 9AM"
  };

  const exercises = [
    { name: "Push-ups", sets: "3", reps: "12", diff: "+2" },
    { name: "Squats", sets: "4", reps: "15", diff: "+5" },
    { name: "Plank", sets: "3", reps: "45s", diff: "+10s" },
    { name: "Lunges", sets: "3", reps: "10", diff: "-2" }
  ];

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
            { icon: Flame, label: "Calories Burned", value: stats.caloriesBurned },
            { icon: Timer, label: "Workout Time", value: stats.workoutTime },
            { icon: Activity, label: "Current Streak", value: stats.currentStreak },
            { icon: CalendarCheck, label: "Weekly Progress", value: stats.weeklyGoal },
            { icon: Trophy, label: "Personal Best", value: stats.personalBest },
            { icon: Calendar, label: "Next Workout", value: stats.nextWorkout }
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

        {/* Exercise Progress */}
        <div className="rounded-lg p-6 mb-8" style={{
          background: 'linear-gradient(#60a5fa, #2563eb)',
          border: '4px solid #fff',
          boxShadow: '4px 4px 0px #1e40af',
          opacity: 0.9
        }}>
          <h2 className="text-2xl font-bold mb-4" style={{ textShadow: '2px 2px 0px #1e40af' }}>
            Today's Workout Progress
          </h2>
          <div className="space-y-4">
            {exercises.map((exercise, index) => (
              <div
                key={index}
                className="p-4 rounded"
                style={{
                  background: 'linear-gradient(#34d399, #059669)',
                  border: '2px solid #fff',
                  boxShadow: '2px 2px 0px #065f46'
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Dumbbell className="w-5 h-5 mr-2" />
                    <span className="font-bold">{exercise.name}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span>{exercise.sets} sets</span>
                    <span>{exercise.reps}/set</span>
                    <span className="flex items-center">
                      {parseInt(exercise.diff) > 0 ? (
                        <ArrowUp className="w-4 h-4 text-green-200" />
                      ) : (
                        <ArrowDown className="w-4 h-4 text-red-200" />
                      )}
                      {exercise.diff}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

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