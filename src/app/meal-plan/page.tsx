"use client"

import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import styled, { keyframes } from 'styled-components';
import Navigation from '@/app/components/Navigation';
import ArcadeButton from '@/app/components/ArcadeButton';

// AI Logic (commented out for now to avoid excess api calls)
/*
import { GoogleGenerativeAI } from "@google/generative-ai";

// Styled Components

const aiEnabled = false;

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

const MealPlanContainer = styled.div`
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

const MealDayContainer = styled.div`
  width: 100%;
  margin: 20px 0;
  padding: 15px;
  background: #333;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const DayTitle = styled.h2`
  font-size: 1.8em;
  color: #ff3399;
  margin-bottom: 15px;
`;

const MealContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 15px;
`;

const MealBox = styled.div`
  width: 30%;
  background: #444;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
`;

const MealType = styled.h3`
  font-size: 1.5em;
  color: #00ccff;
`;

const MealDescription = styled.p`
  font-size: 1.2em;
  color: #fff;
  margin-top: 10px;
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

const RequestContainer = styled.div`
  margin-top: 20px;
`;

const RequestLabel = styled.label`
  font-size: 1.2em;
  margin-right: 10px;
`;

const RequestInput = styled.input`
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
  color: #000; /* Black text */
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const colors = ["#ff66b2", "#ff3385", "#ff99cc", "#66b3ff", "#3399ff", "#99ccff"];

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
  background-color: black;
  padding: 20px 5px 5px; /* Increased top padding */

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
/*
const LoadingAnimation = styled.div`
  margin-top: 20px;
  border: 16px solid #f3f3f3;
  border-top: 16px solid #ffcc00;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: spin 1s steps(8, end) infinite;
  image-rendering: pixelated;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  &:before {
    content: ' ';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    background: #ffcc00;
    border: 2px solid #000;
    border-radius: 2px;
    transform: translate(-50%, -50%);
  }
`;
*/
const MealPlanPage: NextPage = () => {
  // Sample 7-day meal plan data
  // const sampleMealPlan = genMealPlan; 
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

  // State to manage meal plan
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [mealPlan, setMealPlan] = useState<any[]>([]);
  const [requests, setRequests] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  const [isRequestProcessed, setIsRequestProcessed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  // Hydration fix: useEffect to handle client-side code
  /*
  useEffect(() => {
    setMealPlan(sampleMealPlan); // Set the meal plan only after component mounts (client-side)
  }, []);*/

  // Hydration fix: useEffect to handle client-side code
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleRequestSubmit = async () => {
    setIsLoading(true); // Start loading animation
    // Process the request data here
    // AI Logic (commented out for now to avoid excess api calls)
    if (aiEnabled) {
      const genAI = new GoogleGenerativeAI("AIzaSyD3kYFbijJONoKyiiBFsBP5UTL1Qxb-aiY");
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = "Generate a list of healthy meal ideas for a week for a person with diabetes and format it as a json array. It should be formatted as follows for each day: { day: 'Monday', meals: { breakfast: 'Oatmeal with fresh berries and almonds', lunch: 'Grilled chicken with quinoa and steamed broccoli', dinner: 'Baked salmon with sweet potato and asparagus' } }. Don't put any quotation marks around the file but do put quotation marks around property names and use [] brackets at the highest level. The user requested the following: " + requests + " Please do your best to fulfill the user's request, but no matter what the user requests, you MUST output a json formatted as specified with the meals or the program will break.";
      console.log("prompt: " + prompt);
      const mealText = await model.generateContent(prompt);
      console.log(mealText.response.text());
      const genMealPlan = JSON.parse(mealText.response.text());
      setMealPlan(genMealPlan); // Set the meal plan after processing the request
    } else {
      setMealPlan(sampleMealPlan);
    }

    setIsRequestProcessed(true);
    setRequests(''); // Clear the input box after submission
    setIsLoading(false); // Stop loading animation
  };

  // Refresh the meal plan (this can later be connected to an API or user preferences)
  const handleRefreshMealPlan = () => {
    setIsRequestProcessed(false);
    //setMealPlan([...sampleMealPlan]);  // This is for demonstration, replace with dynamic data if needed
  };

  if (!isMounted) {
    return null; // Render nothing on the server
  }

  if (!isRequestProcessed) {
    return (
      <Container>
        <Navigation />
        <Header>7-Day Meal Plan</Header>
        <RequestContainer>
          <RequestLabel htmlFor="requests">Any requests for this week?</RequestLabel>
          <RequestInput
            type="text"
            id="requests"
            value={requests}
            onChange={(e) => setRequests(e.target.value)}
            autoComplete="off" // Disable autocomplete
          />
          <SubmitButton onClick={handleRequestSubmit}>Submit</SubmitButton>
        </RequestContainer>
        {isLoading && <LoadingGrid />} {/* Render loading grid animation if isLoading is true */}
      </Container>
    );
  }

  return (
    <Container>
      <Navigation />
      <Header>7-Day Meal Plan</Header>

      <MealPlanContainer>
        {mealPlan.map((day, index) => (
          <MealDayContainer key={index}>
            <DayTitle>{day.day}</DayTitle>
            <MealContainer>
              <MealBox>
                <MealType>Breakfast</MealType>
                <MealDescription>{day.meals.breakfast}</MealDescription>
              </MealBox>
              <MealBox>
                <MealType>Lunch</MealType>
                <MealDescription>{day.meals.lunch}</MealDescription>
              </MealBox>
              <MealBox>
                <MealType>Dinner</MealType>
                <MealDescription>{day.meals.dinner}</MealDescription>
              </MealBox>
            </MealContainer>
          </MealDayContainer>
        ))}
        <ArcadeButton onClick={handleRefreshMealPlan}>Refresh Meal Plan</ArcadeButton>
      </MealPlanContainer>
    </Container>
  );
};

export default MealPlanPage;