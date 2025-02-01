"use client"

import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';

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

const MealPlanPage: NextPage = () => {
  // Sample 7-day meal plan data
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
  const [mealPlan, setMealPlan] = useState<any[]>([]);

  // Hydration fix: useEffect to handle client-side code
  useEffect(() => {
    setMealPlan(sampleMealPlan); // Set the meal plan only after component mounts (client-side)
  }, []);

  // Refresh the meal plan (this can later be connected to an API or user preferences)
  const handleRefreshMealPlan = () => {
    setMealPlan([...sampleMealPlan]);  // This is for demonstration, replace with dynamic data if needed
  };

  return (
    <Container>
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
        <Button onClick={handleRefreshMealPlan}>Refresh Meal Plan</Button>
      </MealPlanContainer>
    </Container>
  );
};

export default MealPlanPage;