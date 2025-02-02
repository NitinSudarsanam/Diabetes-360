"use client"

import React, { useState } from 'react';
import { User, Mail, Lock, Heart } from 'lucide-react';
import Navigation from '@/app/components/Navigation';
import { useRouter } from 'next/navigation'; 

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    diabetesType: ''
  });

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle signup logic
  };

  return (
    <div className="min-h-screen bg-sky-400 p-8 text-white font-mono">
      <Navigation />
      <div className="max-w-md mx-auto">
        <div style={{
          background: 'linear-gradient(#fcd34d, #f59e0b)',
          border: '4px solid #fff',
          boxShadow: '4px 4px 0px #92400e',
          borderRadius: '8px',
          opacity: 0.9,
           padding: '20px 20px 20px'
        }}>
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <h2 className="text-2xl font-bold text-center mb-6" 
                style={{ textShadow: '2px 2px 0px #92400e' }}>
              CREATE YOUR PLAYER
            </h2>
            
            <div className="space-y-2">
              <label className="block">Username</label>
              <div className="flex items-center bg-white rounded p-2">
                <User className="text-amber-600 w-5 h-5 mr-2" />
                <input
                  type="text"
                  className="flex-1 text-black outline-none bg-transparent"
                  value={formData.username}
                  onChange={(e) => setFormData({...formData, username: e.target.value})}
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
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
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
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block">Diabetes Type</label>
              <div className="flex items-center bg-white rounded p-2">
                <Heart className="text-amber-600 w-5 h-5 mr-2" />
                <select
                  className="flex-1 text-black outline-none bg-transparent"
                  value={formData.diabetesType}
                  onChange={(e) => setFormData({...formData, diabetesType: e.target.value})}
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
                background: 'linear-gradient(#34d399, #059669)',
                border: '2px solid #fff',
                boxShadow: '2px 2px 0px #065f46',
                textShadow: '1px 1px 0px #065f46'
              }}
            >
              START JOURNEY!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;