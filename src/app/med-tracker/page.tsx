/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import React, { useState, useEffect } from 'react';
import Navigation from '@/app/components/Navigation';
import { Syringe, PlusCircle, Trash2 } from 'lucide-react';
import { useGlobalState } from '../context/GlobalStateContext'; // Adjust the path based on your project structure
import { useRouter } from 'next/navigation';
import axios from 'axios';

type Medication = {
  id: number;
  name: string;
  details: string;
  dosage: string;
  taken: boolean;
};

const AddMedication = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

  // Array of medications with [name, details, dosage] format
  /*
  const fakeMedicationData: [string, string, number][] = [
    ["Insulin Shot", "Fast-acting insulin before meals.", 10],
    ["Metformin", "Helps control blood sugar levels.", 500],
  ];*/
  const medicationData: [string, string, number][] = globalState.meds || [];

  // Initialize medications state by transforming the array
  const [medications, setMedications] = useState(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    medicationData.map((med: any[], index: number) => ({
      id: index + 1, // Unique ID based on the index
      name: med[0],
      details: med[1],
      dosage: `${med[2]} mg`, // Convert dosage to string with "mg"
      taken: false
    }))
  );

  const [newMedName, setNewMedName] = useState("");
  const [newMedDetails, setNewMedDetails] = useState("");
  const [newDosage, setNewDosage] = useState("");

  const addMedication = () => {
    if (newMedName.trim() === "" || newMedDetails.trim() === "" || newDosage.trim() === "") return;
    const updatedMedications = [...medications, {
      id: Date.now(),
      name: newMedName,
      details: newMedDetails,
      dosage: `${newDosage} mg`, // Convert dosage to string with "mg"
      taken: false
    }];
    setMedications(updatedMedications);
    setNewMedName("");
    setNewMedDetails("");
    setNewDosage("");
    updateVars(updatedMedications);
  };

  const toggleMedication = (id: number) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setMedications(medications.map((med: Medication) =>
      med.id === id ? { ...med, taken: !med.taken } : med
    ));
  };

  const removeMedication = (id: number) => {
    setMedications(medications.filter((med: { id: number; }) => med.id !== id));
    updateVars();
  };
  async function updateVars(updatedMedications: Medication[] = medications) {
    globalState.meds = updatedMedications.map((med: Medication) => [med.name, med.details, parseInt(med.dosage)]);
    const dataToSend = {
      email: globalState.email,
      medicationData: globalState.meds
    };
    console.log(globalState);
    await axios.post("https://fgyis6cpq9.us-east-1.awsapprunner.com/api/update-med-data", dataToSend, {
      headers: { "Content-Type": "application/json" },
    });
  }

  return (
    <div className="min-h-screen bg-sky-400 p-8 text-white font-mono relative flex flex-col items-center"
      style={{
        backgroundImage: 'linear-gradient(transparent 95%, #7dd3fc 95%), linear-gradient(90deg, transparent 95%, #7dd3fc 95%)',
        backgroundSize: '40px 40px'
      }}>
      <Navigation />

      {/* Header */}
      <div className="text-4xl font-bold text-center mb-8"
        style={{ textShadow: '3px 3px 0px #0369a1', padding: '20px 20px 20px' }}>
      </div>
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 p-6 rounded-lg inline-block"
          style={{
            background: 'linear-gradient(#ef4444, #dc2626)',
            textShadow: '4px 4px 0px #991b1b',
            border: '4px solid #fff',
            opacity: 0.9
          }}>
          ADD MEDICATION
        </h1>
        <p className="text-lg text-white" style={{ textShadow: '2px 2px 0px #0369a1' }}>
          ★ Tap to take your medication! Click the trash icon to remove it. ★
        </p>
      </header>

      {/* Add New Medication */}
      <div className="mb-12 bg-yellow-500 p-6 rounded-lg text-center shadow-lg border-4 border-white w-full max-w-2xl"
        style={{ boxShadow: '4px 4px 0px #92400e' }}>
        <h2 className="text-2xl font-bold mb-4">Add a New Medication</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <input
            type="text"
            className="p-2 border-2 border-white rounded-lg text-black w-full"
            placeholder="Medication Name"
            value={newMedName}
            onChange={(e) => setNewMedName(e.target.value)}
          />
          <input
            type="text"
            className="p-2 border-2 border-white rounded-lg text-black w-full"
            placeholder="Details (e.g., time)"
            value={newMedDetails}
            onChange={(e) => setNewMedDetails(e.target.value)}
          />
          <input
            type="number"
            className="p-2 border-2 border-white rounded-lg text-black w-full"
            placeholder="Dosage (e.g., 500)"
            value={newDosage}
            onChange={(e) => setNewDosage(e.target.value)}
          />
        </div>
        <button onClick={addMedication} className="mt-4 bg-green-500 p-3 rounded-lg flex items-center justify-center text-white w-full">
          <PlusCircle className="w-6 h-6 mr-2" /> Add Medication
        </button>
      </div>

      {/* Medication List */}
      <div className="w-full max-w-lg space-y-4">
        {medications.map((med: Medication) => (
          <div key={med.id}
            className={`p-4 rounded-lg cursor-pointer transition-all duration-200 flex justify-between items-center
            ${med.taken ? "bg-green-500" : "bg-yellow-500"} border-4 border-white shadow-lg`}
            style={{ boxShadow: '4px 4px 0px #92400e' }}
            onClick={() => toggleMedication(med.id)}>
            <div className="flex items-center space-x-4 w-full">
              <Syringe className="w-8 h-8" />
              <div className="flex-1">
          <h2 className="text-xl font-bold">{med.name}</h2>
          <p className="text-sm">{med.details}</p>
          <p className="text-sm font-semibold">Dosage: {med.dosage}</p>
              </div>
              <button onClick={(e) => { e.stopPropagation(); removeMedication(med.id); }} className="text-white">
          <Trash2 className="w-6 h-6" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center">
        <div className="p-4 rounded-lg inline-block"
          style={{
            background: 'linear-gradient(#34d399, #059669)',
            border: '4px solid #fff',
            boxShadow: '4px 4px 0px #065f46',
            opacity: 0.9
          }}>
          <p className="mb-2 text-xl" style={{ textShadow: '2px 2px 0px #065f46' }}>
            ⭐ KEEP UP WITH YOUR MEDS! ⭐
          </p>
          <p className="text-sm">Press B to Go Back | Press A to Mark Taken | Press the Trash Icon to Remove</p>
        </div>
      </footer>
    </div>
  );
};

export default AddMedication;