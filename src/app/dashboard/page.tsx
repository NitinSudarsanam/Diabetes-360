"use client"

import React from 'react';
import { Activity, TrendingUp, Cookie, Heart, CalendarCheck, Timer } from 'lucide-react';
import Navigation from '@/app/components/Navigation';

const DashboardPage = () => {
  const stats = {
    avgBloodSugar: "120 mg/dL",
    lastMedication: "2 hours ago",
    exerciseStreak: "5 days",
    nextMeal: "Lunch in 1 hour",
    dailySteps: "8,450",
    weeklyExercise: "4.5 hours"
  };

  return (
    <div className="min-h-screen bg-sky-400 p-8 text-white font-mono" style={{
      backgroundImage: 'linear-gradient(transparent 95%, #7dd3fc 95%), linear-gradient(90deg, transparent 95%, #7dd3fc 95%)',
      backgroundSize: '40px 40px'
    }}>
      <Navigation />
      <h1 className="text-4xl font-bold text-center mb-8" 
          style={{ textShadow: '3px 3px 0px #0369a1', padding: '80px 20px 20px' }}>
        PLAYER STATS
      </h1>

      <div className="max-w-6xl mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {[
            { icon: Cookie, label: "Avg Blood Sugar", value: stats.avgBloodSugar },
            { icon: Timer, label: "Last Power-Up", value: stats.lastMedication },
            { icon: Activity, label: "Exercise Streak", value: stats.exerciseStreak },
            { icon: CalendarCheck, label: "Next Meal", value: stats.nextMeal },
            { icon: TrendingUp, label: "Daily Steps", value: stats.dailySteps },
            { icon: Heart, label: "Weekly Exercise", value: stats.weeklyExercise }
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

        {/* Recent Activity */}
        <div className="rounded-lg p-6" style={{
          background: 'linear-gradient(#60a5fa, #2563eb)',
          border: '4px solid #fff',
          boxShadow: '4px 4px 0px #1e40af',
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
                  background: 'linear-gradient(#34d399, #059669)',
                  border: '2px solid #fff',
                  boxShadow: '2px 2px 0px #065f46'
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