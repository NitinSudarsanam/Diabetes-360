"use client"

import React, { useState } from 'react';
import { Utensils, RefreshCw } from 'lucide-react';
import Navigation from '@/app/components/Navigation';
import styled, { keyframes } from 'styled-components';
import { GoogleGenerativeAI } from "@google/generative-ai";

const MealPlanPage = () => {
  const colors = ["#3b82f6", "#60a5fa", "#93c5fd", "#fcd34d", "#fbbf24", "#f59e0b"];

  // Generate random color keyframes
  const pulse = keyframes`
  0% { background-color: ${colors[0]}; }
  20% { background-color: ${colors[1]}; }
  40% { background-color: ${colors[2]}; }
  60% { background-color: ${colors[3]}; }
  80% { background-color: ${colors[4]}; }
  100% { background-color: ${colors[5]}; }
`;

  const LoadingAnimation = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 15px);
  grid-template-rows: repeat(4, 15px);
  gap: 4px;
  padding: 5px; /* Increased top padding */

  div {
    width: 15px;
    height: 15px;
    animation: ${pulse} 1.5s infinite alternate;
    animation-delay: calc(var(--delay, 0) * 0.1s); /* Staggered animation */
  }
`;

  const LoadingGrid = () => {
    return (
      <LoadingAnimation>
        {[...Array(16)].map((_, i) => (
          <div key={i} style={{ animationDelay: `${i * 0.1}s` }} />
        ))}
      </LoadingAnimation>
    );
  };
  const sampleMealPlan = [
    {
      day: "Monday",
      meals: {
        breakfast: "Oatmeal with fresh berries and almonds",
        lunch: "Grilled chicken with quinoa and steamed broccoli",
        dinner: "Baked salmon with sweet potato and asparagus"
      }
    },
    {
      day: "Tuesday",
      meals: {
        breakfast: "Greek yogurt with honey and chia seeds",
        lunch: "Turkey and avocado wrap with a side of mixed greens",
        dinner: "Spaghetti with marinara sauce and a side salad"
      }
    },
    {
      day: "Wednesday",
      meals: {
        breakfast: "Scrambled eggs with spinach and whole grain toast",
        lunch: "Tuna salad with mixed veggies and olive oil dressing",
        dinner: "Grilled steak with mashed cauliflower and green beans"
      }
    },
    {
      day: "Thursday",
      meals: {
        breakfast: "Smoothie with banana, spinach, protein powder, and almond milk",
        lunch: "Chicken Caesar salad with a side of whole wheat crackers",
        dinner: "Baked chicken thighs with roasted Brussels sprouts and quinoa"
      }
    },
    {
      day: "Friday",
      meals: {
        breakfast: "Whole grain pancakes with fresh fruit and maple syrup",
        lunch: "Grilled shrimp tacos with cabbage slaw and salsa",
        dinner: "Vegetable stir-fry with tofu and brown rice"
      }
    },
    {
      day: "Saturday",
      meals: {
        breakfast: "Avocado toast with poached egg and cherry tomatoes",
        lunch: "Grilled chicken with roasted vegetables and couscous",
        dinner: "Salmon fillet with lemon and garlic green beans"
      }
    },
    {
      day: "Sunday",
      meals: {
        breakfast: "Chia pudding with coconut milk and sliced strawberries",
        lunch: "Quinoa bowl with chickpeas, cucumber, and feta",
        dinner: "Roast beef with mashed potatoes and steamed carrots"
      }
    }
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [mealPlan, setMealPlan] = useState<any[]>([]);
  const [userRequest, setUserRequest] = useState('');
  const [isRequestProcessed, setIsRequestProcessed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const aiEnabled = false; // or false, depending on your requirement

  const handleRequestSubmit = async () => {
    setIsLoading(true);
    // API call logic would go here
    if (aiEnabled) {
      const genAI = new GoogleGenerativeAI("AIzaSyD3kYFbijJONoKyiiBFsBP5UTL1Qxb-aiY");
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = "Generate a list of healthy meal ideas for a week for a person with diabetes and format it as a json array. It should be formatted as follows for each day: { day: 'Monday', meals: { breakfast: 'Oatmeal with fresh berries and almonds', lunch: 'Grilled chicken with quinoa and steamed broccoli', dinner: 'Baked salmon with sweet potato and asparagus' } }. Don't put any quotation marks around the file but do put quotation marks around property names and use [] brackets at the highest level. The user requested the following: " + userRequest + " Please do your best to fulfill the user's request, but no matter what the user requests, you MUST output a json formatted as specified with the meals or the program will break.";
      console.log("prompt: " + prompt);
      const mealText = await model.generateContent(prompt);
      console.log(mealText.response.text());
      const genMealPlan = JSON.parse(mealText.response.text());
      setMealPlan(genMealPlan); // Set the meal plan after processing the request
    } else {
      setMealPlan(sampleMealPlan);
    }
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
          <div className="flex justify-center items-center mt-8">
            <LoadingGrid />
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
      <Navigation />
      <h1 className="text-4xl font-bold text-center mb-8"
        style={{ textShadow: '3px 3px 0px #0369a1', padding: '80px 20px 20px' }}>
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
                  <p className="text-sm">{String(meal)}</p>
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