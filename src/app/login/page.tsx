"use client";

import React, { useState } from "react";
import axios from "axios";
import { NextPage } from "next";
import Navigation from "@/app/components/Navigation";
import { useRouter } from "next/navigation";
import { Mail, Lock, User } from "lucide-react"; // Importing missing icons
import { useGlobalState } from "../context/GlobalStateContext"; // Adjust the path based on your project structure

const LoginPage: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { globalState, setGlobalState } = useGlobalState();

  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    setGlobalState({ isAuthenticated: false });

    try {
      const response = await axios.post(
        "https://fgyis6cpq9.us-east-1.awsapprunner.com/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      const data = response.data as { token: string };
      if (data.token) {
        localStorage.setItem("authToken", data.token); // Store token in local storage
        const userInfoServer = await axios.get(
          "https://fgyis6cpq9.us-east-1.awsapprunner.com/api/users",
          {headers: {address: email}}
        );
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const userData = (userInfoServer.data as any)[0] as {
          name: string;
          email: string;
          age: number;
          height: number;
          weight: number;
          bloodSugar: number;
          diabetesDuration: number;
          meds: string[];
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          cardioLog: any[];
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          weightsLog: any[];
        };
        console.log(userData.name);
        globalState.name = userData.name;
        globalState.email = userData.email;
        globalState.age = userData.age;
        globalState.height = userData.height;
        globalState.weight = userData.weight;
        globalState.bloodSugar = userData.bloodSugar;
        globalState.diabetesDuration = userData.diabetesDuration;
        globalState.meds = userData.meds;
        globalState.cardioLog = userData.cardioLog;
        globalState.weightsLog = userData.weightsLog;
        setGlobalState({ isAuthenticated: true });
        console.log(globalState);
        router.push("/dashboard"); // Redirect after successful login
      } else {
        setError("Login failed: No token received");
      }
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const err = error as any;
      setError(`Login failed: ${err.response?.data?.error || "Unknown error"}`);
      setError("Login failed: Unknown error");
    }
  };

  return (
    <div className="min-h-screen bg-sky-400 p-8 text-white font-mono">
      <Navigation />
      <h1
        className="text-4xl font-bold text-center mb-8"
        style={{ textShadow: "3px 3px 0px #0369a1", padding: "80px 20px 20px" }}
      >
        Login
      </h1>
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
          <form onSubmit={handleLogin} className="p-6 space-y-4">
            <h2
              className="text-2xl font-bold text-center mb-6"
              style={{ textShadow: "2px 2px 0px #92400e" }}
            >
              Login
            </h2>
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
            {error && <p className="text-red-600 text-center">{error}</p>}
            <button
              type="submit"
              className="w-full p-3 mt-6 rounded font-bold transform hover:-translate-y-1 transition-transform duration-200"
              style={{
                background: "linear-gradient(#34d399, #059669)",
                border: "2px solid #fff",
                boxShadow: "2px 2px 0px #065f46",
                textShadow: "1px 1px 0px #065f46",
              }}
            >
              START ADVENTURE!
            </button>
          </form>

          {/* Sign-Up Link */}
          <div className="mt-4 flex justify-center items-center">
            <a
              href="/signup"
              className="flex items-center space-x-2 text-white hover:text-amber-600 transition duration-200"
            >
              <User className="w-5 h-5" />
              <span>Not Registered? Click to Sign-Up</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage; // Make sure it's the default export