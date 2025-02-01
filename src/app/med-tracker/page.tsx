"use client"

import React, { useState } from 'react';
import { Pill, Plus, Check, X } from 'lucide-react';
import Navigation from '@/app/components/Navigation';

const MedicationTrackerPage = () => {
  const [medications, setMedications] = useState([
    { id: 1, name: 'Metformin', dosage: '500mg', time: '08:00', taken: false },
    { id: 2, name: 'Insulin', dosage: '10 units', time: '12:00', taken: false }
  ]);

  const [newMed, setNewMed] = useState({ name: '', dosage: '', time: '' });

  const handleAddMedication = () => {
    setMedications([...medications, { ...newMed, id: Date.now(), taken: false }]);
    setNewMed({ name: '', dosage: '', time: '' });
  };

  const toggleTaken = (id: number) => {
    setMedications(medications.map(med =>
      med.id === id ? { ...med, taken: !med.taken } : med
    ));
  };

  return (
    <div className="min-h-screen bg-sky-400 p-8 text-white font-mono">
      <Navigation />
      <h1 className="text-4xl font-bold text-center mb-8" 
          style={{ textShadow: '3px 3px 0px #0369a1', padding: '80px 20px 20px' }}>
        POWER-UP TRACKER
      </h1>

      {/* Add New Medication */}
      <div className="max-w-2xl mx-auto mb-8" style={{
        background: 'linear-gradient(#fcd34d, #f59e0b)',
        border: '4px solid #fff',
        boxShadow: '4px 4px 0px #92400e',
        borderRadius: '8px',
        opacity: 0.9
      }}>
        <div className="p-6 space-y-4">
          <h2 className="text-xl font-bold mb-4">Add New Power-Up</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="p-2 rounded text-black"
              value={newMed.name}
              onChange={(e) => setNewMed({...newMed, name: e.target.value})}
            />
            <input
              type="text"
              placeholder="Dosage"
              className="p-2 rounded text-black"
              value={newMed.dosage}
              onChange={(e) => setNewMed({...newMed, dosage: e.target.value})}
            />
            <input
              type="time"
              className="p-2 rounded text-black"
              value={newMed.time}
              onChange={(e) => setNewMed({...newMed, time: e.target.value})}
            />
          </div>
          <button
            onClick={handleAddMedication}
            className="flex items-center justify-center w-full p-2 rounded font-bold"
            style={{
              background: 'linear-gradient(#34d399, #059669)',
              border: '2px solid #fff',
              boxShadow: '2px 2px 0px #065f46'
            }}
          >
            <Plus className="w-5 h-5 mr-2" /> Add Power-Up
          </button>
        </div>
      </div>

      {/* Medication List */}
      <div className="max-w-2xl mx-auto space-y-4">
        {medications.map(med => (
          <div
            key={med.id}
            className="p-4 rounded flex items-center justify-between"
            style={{
              background: med.taken ? 'linear-gradient(#34d399, #059669)' : 'linear-gradient(#60a5fa, #2563eb)',
              border: '3px solid #fff',
              boxShadow: '3px 3px 0px #1e40af',
              opacity: 0.9
            }}
          >
            <div className="flex items-center">
              <Pill className="w-6 h-6 mr-3" />
              <div>
                <h3 className="font-bold">{med.name}</h3>
                <p className="text-sm">{med.dosage} - {med.time}</p>
              </div>
            </div>
            <button
              onClick={() => toggleTaken(med.id)}
              className={`p-2 rounded ${med.taken ? 'bg-green-700' : 'bg-blue-700'}`}
            >
              {med.taken ? <Check className="w-5 h-5" /> : <X className="w-5 h-5" />}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicationTrackerPage;