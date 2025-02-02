"use client"

import React, { useState } from 'react';
import { Utensils, RefreshCw } from 'lucide-react';
import Navigation from '@/app/components/Navigation';

const MealPlanPage = () => {
  const [mealPlan, setMealPlan] = useState([
    {
      day: "Monday",
      meals: {
        breakfast: "Oatmeal with fresh berries and almonds",
        lunch: "Grilled chicken with quinoa and steamed broccoli",
        dinner: "Baked salmon with sweet potato and asparagus"
      }
    },
    // ... more days
  ]);

  const [userRequest, setUserRequest] = useState('');
  const [isRequestProcessed, setIsRequestProcessed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleRequestSubmit = () => {
    setIsLoading(true);
    // API call logic would go here
    setTimeout(() => {
      setIsRequestProcessed(true);
      setIsLoading(false);
    }, 1000);
  };

  const handleRefreshMealPlan = () => {
    setIsRequestProcessed(false);
  };

  if (!isRequestProcessed) {
    return (
      <div className="min-h-screen bg-sky-400 p-8 text-white font-mono" style={{
        backgroundImage: 'linear-gradient(transparent 95%, #7dd3fc 95%), linear-gradient(90deg, transparent 95%, #7dd3fc 95%)',
        backgroundSize: '40px 40px'
      }}>
        <Navigation />
        <h1 className="text-4xl font-bold text-center mb-8" 
            style={{ textShadow: '3px 3px 0px #0369a1', padding: '80px 20px 20px' }}>
          POWER-UP MEAL PLANNER
        </h1>

        <div className="max-w-2xl mx-auto" style={{
          background: 'linear-gradient(#fcd34d, #f59e0b)',
          border: '4px solid #fff',
          boxShadow: '4px 4px 0px #92400e',
          borderRadius: '8px',
          opacity: 0.9
        }}>
          <div className="p-6 space-y-4">
            <label className="block text-xl mb-2">Any Special Power-Ups Needed?</label>
            <input
              type="text"
              className="w-full p-3 rounded text-black"
              value={userRequest}
              onChange={(e) => setUserRequest(e.target.value)}
              placeholder="Low carb, vegetarian, etc..."
            />
            <button
              onClick={handleRequestSubmit}
              className="w-full p-3 rounded font-bold"
              style={{
                background: 'linear-gradient(#34d399, #059669)',
                border: '2px solid #fff',
                boxShadow: '2px 2px 0px #065f46'
              }}
            >
              START MEAL QUEST!
            </button>
          </div>
        </div>

        {isLoading && (
          <div className="grid grid-cols-4 gap-2 max-w-xs mx-auto mt-8">
            {[...Array(16)].map((_, i) => (
              <div
                key={i}
                className="w-4 h-4 bg-yellow-300 animate-bounce"
                style={{ animationDelay: `${i * 0.1}s` }}
              ></div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-sky-400 p-8 text-white font-mono" style={{
      backgroundImage: 'linear-gradient(transparent 95%, #7dd3fc 95%), linear-gradient(90deg, transparent 95%, #7dd3fc 95%)',
      backgroundSize: '40px 40px'
    }}>
      <h1 className="text-4xl font-bold text-center mb-8" 
          style={{ textShadow: '3px 3px 0px #0369a1' }}>
        POWER-UP MEAL PLANNER
      </h1>

      <div className="max-w-6xl mx-auto space-y-6">
        {mealPlan.map((day, index) => (
          <div
            key={index}
            style={{
              background: 'linear-gradient(#fcd34d, #f59e0b)',
              border: '4px solid #fff',
              boxShadow: '4px 4px 0px #92400e',
              borderRadius: '8px',
              opacity: 0.9
            }}
            className="p-6"
          >
            <h2 className="text-2xl font-bold mb-4" style={{ textShadow: '2px 2px 0px #92400e' }}>
              {day.day}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Object.entries(day.meals).map(([mealType, meal]) => (
                <div
                  key={mealType}
                  className="p-4 rounded"
                  style={{
                    background: 'linear-gradient(#60a5fa, #2563eb)',
                    border: '3px solid #fff',
                    boxShadow: '3px 3px 0px #1e40af'
                  }}
                >
                  <div className="flex items-center mb-2">
                    <Utensils className="w-5 h-5 mr-2" />
                    <h3 className="text-lg font-bold capitalize">
                      {mealType}
                    </h3>
                  </div>
                  <p className="text-sm">{meal}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <button
          onClick={handleRefreshMealPlan}
          className="fixed bottom-8 right-8 p-4 rounded-full"
          style={{
            background: 'linear-gradient(#34d399, #059669)',
            border: '3px solid #fff',
            boxShadow: '3px 3px 0px #065f46'
          }}
        >
          <RefreshCw className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default MealPlanPage;