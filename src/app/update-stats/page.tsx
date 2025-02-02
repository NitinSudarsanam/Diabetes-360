/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { NextPage } from "next";
import { CalendarCheck, User, Ruler, Heart, BarChart2 } from "lucide-react";
import Navigation from "@/app/components/Navigation";
import { useGlobalState } from '../context/GlobalStateContext'; // Adjust the path based on your project structure
import { useRouter } from 'next/navigation';

const UpdateStatsPage: NextPage = () => {
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

  // fetch stats from mongoDB

  const [stats, setStats] = useState({
    email: globalState.email,
    name: globalState.name || "",
    age: globalState.age || "",
    height: globalState.height || "",
    weight: globalState.weight || "",
    bloodSugar: globalState.bloodSugar || "",
    diabetesDuration: globalState.diabetesDuration || "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStats((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setLoading(true);

    try {
      const response = await axios.post("https://fgyis6cpq9.us-east-1.awsapprunner.com/api/update-stats", stats, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200) {
        // update global variables to match contents of text boxes. Values should be empty strings or 0 if the boxes are empty
        globalState.name = stats.name;
        globalState.age = stats.age;
        globalState.height = stats.height;
        globalState.weight = stats.weight;
        globalState.bloodSugar = stats.bloodSugar;
        globalState.diabetesDuration = stats.diabetesDuration;

        setSuccess(true);
        /*
        setStats({
          name: "",
          age: "",
          height: "",
          weight: "",
          bloodSugar: "",
          diabetesDuration: "",
        });*/
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("Failed to update stats. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-sky-400 p-8 text-white font-mono"
      style={{
        backgroundImage: 'linear-gradient(transparent 95%, #7dd3fc 95%), linear-gradient(90deg, transparent 95%, #7dd3fc 95%)',
        backgroundSize: '40px 40px'
      }}>
      <Navigation />
      <h1 className="text-4xl font-bold text-center mb-8"
        style={{ textShadow: '3px 3px 0px #0369a1', padding: '80px 20px 20px' }}>
        UPDATE YOUR STATS
      </h1>

      <div className="max-w-6xl mx-auto flex-grow">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              { icon: User, label: 'Name', name: 'name', type: 'text', placeholder: 'Enter your name' },
              { icon: CalendarCheck, label: 'Age (Years)', name: 'age', type: 'number', placeholder: 'Enter your age' },
              { icon: Ruler, label: 'Height (Inches)', name: 'height', type: 'text', placeholder: 'Enter your height (e.g., 73")' },
              { icon: BarChart2, label: 'Weight (lbs)', name: 'weight', type: 'text', placeholder: 'Enter your weight (in lbs)' },
              { icon: Heart, label: 'Blood Sugar (mg/dL)', name: 'bloodSugar', type: 'text', placeholder: 'Enter your blood sugar level' },
              { icon: CalendarCheck, label: 'Diabetes Duration', name: 'diabetesDuration', type: 'number', placeholder: 'Enter the number of years' },
            ].map((field, index) => (
              <div key={index} className="p-6 rounded transform hover:-translate-y-1 transition-transform"
                style={{
                  background: 'linear-gradient(#fcd34d, #f59e0b)',
                  border: '4px solid #fff',
                  boxShadow: '4px 4px 0px #92400e',
                  opacity: 0.9
                }}>
                <div className="flex items-center mb-2">
                  <field.icon className="w-8 h-8 mr-3" />
                  <h2 className="text-xl font-bold">{field.label}</h2>
                </div>
                <input
                  type={field.type}
                  name={field.name}
                  value={stats[field.name as keyof typeof stats]}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 bg-white text-black rounded-lg shadow-md"
                  placeholder={field.placeholder}
                />
              </div>
            ))}
          </div>

          {error && <p className="text-red-600 text-center">{error}</p>}
          {success && <p className="text-green-600 text-center">Stats updated successfully!</p>}

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="px-6 py-3 text-xl font-bold text-white border-4 border-white rounded-lg shadow-lg transition-transform transform hover:-translate-y-1"
              style={{
                background: "linear-gradient(#fcd34d, #f59e0b)",
                boxShadow: "4px 4px 0px #92400e",
                textShadow: "2px 2px 0px #92400e"
              }}
              disabled={loading}
            >
              {loading ? "Updating..." : "Update Stats"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateStatsPage;