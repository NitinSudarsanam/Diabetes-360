"use client";

import React, { useState } from "react";
import axios from "axios";
import { NextPage } from "next";
import Navigation from "@/app/components/Navigation";
import { useRouter } from "next/navigation"; 
import { Mail, Lock } from "lucide-react"; // Importing missing icons

const LoginPage: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:4000/api/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      const data = response.data as { token: string };
      if (data.token) {
        localStorage.setItem("authToken", data.token); // Store token
        router.push("/dashboard"); // Redirect after successful login
      } else {
        setError("Login failed: No token received");
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setError("Login failed");
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
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
