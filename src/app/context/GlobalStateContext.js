"use client"

import React, { createContext, useContext, useState } from 'react';

// Create the context for the global state
const GlobalStateContext = createContext();

// Create a provider component
export const GlobalStateProvider = ({ children }) => {
  const sampleUser = {
    email: "john.doe@example.com",
    password: "hashedpassword123", // Use an actual hashed password in production
    name: "John Doe",
    age: 30,
    height: 175, // In cm
    weight: 75, // In kg
    bloodSugar: 120, // In mg/dL
    diabetesDuration: 5, // In years
    meds: [
      "Metformin", // Medication 1
      "Insulin", // Medication 2
      50.5 // Dosage (in units)
    ],
    cardioLog: [
      "2025-02-01", // Date of the activity
      30 // Duration in minutes
    ],
    weightsLog: [
      "2025-02-01", // Date of the activity
      80 // Weight lifted in kg
    ]
  };  
  const [globalState, setGlobalState] = useState(sampleUser);

  return (
    <GlobalStateContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Create a custom hook to use the global state in any component
export const useGlobalState = () => {
  return useContext(GlobalStateContext);
};
