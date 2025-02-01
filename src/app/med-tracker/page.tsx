"use client"

import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import Navigation from '@/app/components/Navigation';

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

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #222;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  margin-top: 20px;
  width: 100%;
  max-width: 500px;
`;

const InputField = styled.input`
  width: 80%;
  padding: 12px;
  margin: 10px 0;
  background-color: #444;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 1.2em;
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

const MedicationList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const MedicationItem = styled.div`
  background: #222;
  padding: 15px;
  margin: 10px 0;
  border-radius: 10px;
  width: 80%;
  max-width: 500px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MedicationText = styled.p`
  color: #fff;
  font-size: 1.2em;
`;

const EditDeleteButton = styled.button`
  background-color: #ff3399;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 1em;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #00ccff;
    transform: scale(1.05);
  }

  &:first-child {
    margin-right: 10px;
  }
`;

const MedicationTrackerPage: NextPage = () => {
  // State for managing the medication list
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [medications, setMedications] = useState<any[]>([]);

  // State for input form
  const [medicationName, setMedicationName] = useState('');
  const [dose, setDose] = useState('');
  const [frequency, setFrequency] = useState('');

  // Hydration fix: useEffect to delay client-specific logic
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set client state after component mounts
  }, []);

  // Add new medication
  const addMedication = () => {
    if (!medicationName || !dose || !frequency) {
      alert('Please fill in all fields');
      return;
    }

    const newMedication = {
      id: new Date().getTime(),
      medicationName,
      dose,
      frequency,
    };

    setMedications([...medications, newMedication]);

    // Clear form
    setMedicationName('');
    setDose('');
    setFrequency('');
  };

  // Delete medication
  const deleteMedication = (id: number) => {
    setMedications(medications.filter(med => med.id !== id));
  };

  // Edit medication (optional, can implement later)
  const editMedication = (id: number) => {
    const medicationToEdit = medications.find(med => med.id === id);
    if (medicationToEdit) {
      setMedicationName(medicationToEdit.medicationName);
      setDose(medicationToEdit.dose);
      setFrequency(medicationToEdit.frequency);

      // Remove it from the list temporarily
      deleteMedication(id);
    }
  };

  // Prevent rendering until mounted on client side
  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Navigation />
      <Header>Medication Tracker</Header>

      <FormContainer>
        <InputField
          type="text"
          placeholder="Medication Name"
          value={medicationName}
          onChange={(e) => setMedicationName(e.target.value)}
        />
        <InputField
          type="text"
          placeholder="Dose (e.g., 50mg)"
          value={dose}
          onChange={(e) => setDose(e.target.value)}
        />
        <InputField
          type="text"
          placeholder="Frequency (e.g., 2x/day)"
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
        />
        <Button onClick={addMedication}>Add Medication</Button>
      </FormContainer>

      <MedicationList>
        {medications.map((med) => (
          <MedicationItem key={med.id}>
            <div>
              <MedicationText>
                <strong>{med.medicationName}</strong>
                <br />
                <small>{med.dose} - {med.frequency}</small>
              </MedicationText>
            </div>

            <div>
              <EditDeleteButton onClick={() => editMedication(med.id)}>
                Edit
              </EditDeleteButton>
              <EditDeleteButton onClick={() => deleteMedication(med.id)}>
                Delete
              </EditDeleteButton>
            </div>
          </MedicationItem>
        ))}
      </MedicationList>
    </Container>
  );
};

export default MedicationTrackerPage;