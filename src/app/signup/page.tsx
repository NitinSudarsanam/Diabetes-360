"use client";

import React, { useState } from "react";
import { User, Mail, Lock, Heart } from "lucide-react";
import Navigation from "@/app/components/Navigation";
import axios from "axios";
import { useRouter } from "next/navigation";

const SignUpPage: React.FC = () => {
  // States for form input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter(); // Move useRouter hook here

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic form validation
    if (!email || !password || !name || !type) {
      setError("Please fill in all fields.");
      return;
    }

    const formData = {
      email,
      password,
      name,
      type,
      age: 0,
      height: 0,
      weight: 0,
      bloodSugar: 0,
      diabetesDuration: 0,
      meds: ["", "", 0],
      cardioLog: ["", 0],
      weightsLog: ["", 0],
    };

    try {
      setLoading(true); // Set loading state
      setError(""); // Reset error

      // Send the formData to the backend via POST request
      const response = await axios.post(
        "https://fgyis6cpq9.us-east-1.awsapprunner.com/api/users",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
        }
      );
      
      console.log("Form submitted successfully:", response.data);
      router.push("/dashboard"); // Redirect after successful signup
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setError(error.response?.data?.error || "Failed to sign up. Please try again.");
      console.error("Error submitting form:", error.response ? error.response.data : error.message);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="min-h-screen bg-sky-400 p-8 text-white font-mono">
      <Navigation />
      <div className="max-w-md mx-auto" style={{ padding: "80px 20px 20px" }}></div>
      <div className="max-w-md mx-auto">
        <div
          style={{
            background: "linear-gradient(#fcd34d, #f59e0b)",
            border: "4px solid #fff",
            boxShadow: "4px 4px 0px #92400e",
            borderRadius: "8px",
            opacity: 0.9,
            padding: "20px 20px 20px",
          }}
        >
          <form onSubmit={handleSignUp} className="p-6 space-y-4">
            <h2
              className="text-2xl font-bold text-center mb-6"
              style={{ textShadow: "2px 2px 0px #92400e" }}
            >
              CREATE YOUR PLAYER
            </h2>

            {/* Error Message */}
            {error && (
              <div className="text-red-500 text-center mb-4">
                <p>{error}</p>
              </div>
            )}

            <div className="space-y-2">
              <label className="block">Username</label>
              <div className="flex items-center bg-white rounded p-2">
                <User className="text-amber-600 w-5 h-5 mr-2" />
                <input
                  type="text"
                  className="flex-1 text-black outline-none bg-transparent"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block">Email</label>
              <div className="flex items-center bg-white rounded p-2">
                <Mail className="text-amber-600 w-5 h-5 mr-2" />
                <input
                  type="email"
                  className="flex-1 text-black outline-none bg-transparent"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block">Password</label>
              <div className="flex items-center bg-white rounded p-2">
                <Lock className="text-amber-600 w-5 h-5 mr-2" />
                <input
                  type="password"
                  className="flex-1 text-black outline-none bg-transparent"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block">Diabetes Type</label>
              <div className="flex items-center bg-white rounded p-2">
                <Heart className="text-amber-600 w-5 h-5 mr-2" />
                <select
                  className="flex-1 text-black outline-none bg-transparent"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="">Select Type</option>
                  <option value="type1">Type 1</option>
                  <option value="type2">Type 2</option>
                  <option value="prediabetes">Prediabetes</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full p-3 mt-6 rounded font-bold transform hover:-translate-y-1 transition-transform duration-200"
              style={{
                background: "linear-gradient(#34d399, #059669)",
                border: "2px solid #fff",
                boxShadow: "2px 2px 0px #065f46",
                textShadow: "1px 1px 0px #065f46",
              }}
              disabled={loading}
            >
              {loading ? "Signing Up..." : "START JOURNEY!"}
            </button>
          </form>
          {/* Sign-Up Link */}
                    <div className="mt-4 flex justify-center items-center">
                      <a
                        href="/login"
                        className="flex items-center space-x-2 text-white hover:text-amber-600 transition duration-200"
                      >
                        <User className="w-5 h-5" />
                        <span>Already Registered? Click to Log In</span>
                      </a>
                    </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;