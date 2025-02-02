"use client"

import React from 'react';
import { Book, Heart, Activity, Syringe, Apple } from 'lucide-react';
import Navigation from '@/app/components/Navigation';

const DiabetesPage = () => {
  return (
    <div className="min-h-screen bg-sky-400 p-8 text-white font-mono relative overflow-hidden" style={{
      backgroundImage: 'linear-gradient(transparent 95%, #7dd3fc 95%), linear-gradient(90deg, transparent 95%, #7dd3fc 95%)',
      backgroundSize: '40px 40px'
    }}>
      <Navigation />
      
      {/* Header */}
      <div className="text-4xl font-bold text-center mb-8" 
           style={{ textShadow: '3px 3px 0px #0369a1', padding: '20px 20px 20px' }}></div>
      <header className="text-center mb-12">
        <h1 className="text-6xl font-bold mb-4 p-6 rounded-lg inline-block"
            style={{
              background: 'linear-gradient(#ef4444, #dc2626)',
              textShadow: '4px 4px 0px #991b1b',
              border: '4px solid #fff',
              opacity: 0.9
            }}>
          DIABETES: WHAT YOU NEED TO KNOW
        </h1>
        <p className="text-2xl text-white" style={{ textShadow: '2px 2px 0px #0369a1' }}>
          ★ The Essential Guide to Managing Your Health ★
        </p>
      </header>

      {/* Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* What is Diabetes */}
        <div className="transform hover:-translate-y-2 transition-transform duration-200"
             style={{
               background: 'linear-gradient(#fcd34d, #f59e0b)',
               border: '4px solid #fff',
               boxShadow: '4px 4px 0px #92400e',
               borderRadius: '8px',
               opacity: 0.9
             }}>
          <div className="p-6">
            <div className="text-sm mb-2" style={{ textShadow: '1px 1px 0px #92400e' }}>WORLD 1-1</div>
            <div className="flex items-center mb-4">
              <Book className="w-8 h-8 mr-2" />
              <h2 className="text-xl font-bold" style={{ textShadow: '2px 2px 0px #92400e' }}>WHAT IS DIABETES?</h2>
            </div>
            <p className="text-white">Diabetes is a condition where the body has trouble processing blood sugar. It affects how your body uses energy and can be managed with the right plan!</p>
          </div>
        </div>

        {/* Types of Diabetes */}
        <div className="transform hover:-translate-y-2 transition-transform duration-200"
             style={{
               background: 'linear-gradient(#fcd34d, #f59e0b)',
               border: '4px solid #fff',
               boxShadow: '4px 4px 0px #92400e',
               borderRadius: '8px',
               opacity: 0.9
             }}>
          <div className="p-6">
            <div className="text-sm mb-2" style={{ textShadow: '1px 1px 0px #92400e' }}>WORLD 1-2</div>
            <div className="flex items-center mb-4">
              <Apple className="w-8 h-8 mr-2" />
              <h2 className="text-xl font-bold" style={{ textShadow: '2px 2px 0px #92400e' }}>TYPES OF DIABETES</h2>
            </div>
            <p className="text-white">There are two main types: Type 1, where the body doesn’t produce insulin, and Type 2, where the body doesn’t use insulin well. Both can be managed with proper care!</p>
          </div>
        </div>

        {/* Symptoms */}
        <div className="transform hover:-translate-y-2 transition-transform duration-200"
             style={{
               background: 'linear-gradient(#fcd34d, #f59e0b)',
               border: '4px solid #fff',
               boxShadow: '4px 4px 0px #92400e',
               borderRadius: '8px',
               opacity: 0.9
             }}>
          <div className="p-6">
            <div className="text-sm mb-2" style={{ textShadow: '1px 1px 0px #92400e' }}>WORLD 1-3</div>
            <div className="flex items-center mb-4">
              <Heart className="w-8 h-8 mr-2" />
              <h2 className="text-xl font-bold" style={{ textShadow: '2px 2px 0px #92400e' }}>SYMPTOMS OF DIABETES</h2>
            </div>
            <p className="text-white">Common symptoms include frequent urination, excessive thirst, fatigue, and blurred vision. It’s important to get checked early!</p>
          </div>
        </div>

        {/* Managing Diabetes */}
        <div className="transform hover:-translate-y-2 transition-transform duration-200"
             style={{
               background: 'linear-gradient(#fcd34d, #f59e0b)',
               border: '4px solid #fff',
               boxShadow: '4px 4px 0px #92400e',
               borderRadius: '8px',
               opacity: 0.9
             }}>
          <div className="p-6">
            <div className="text-sm mb-2" style={{ textShadow: '1px 1px 0px #92400e' }}>WORLD 2-1</div>
            <div className="flex items-center mb-4">
              <Activity className="w-8 h-8 mr-2" />
              <h2 className="text-xl font-bold" style={{ textShadow: '2px 2px 0px #92400e' }}>MANAGING DIABETES</h2>
            </div>
            <p className="text-white">A healthy diet, regular exercise, and medication can help manage diabetes effectively. Keep track of your blood sugar levels and stay active!</p>
          </div>
        </div>

        {/* Medications */}
        <div className="transform hover:-translate-y-2 transition-transform duration-200"
             style={{
               background: 'linear-gradient(#fcd34d, #f59e0b)',
               border: '4px solid #fff',
               boxShadow: '4px 4px 0px #92400e',
               borderRadius: '8px',
               opacity: 0.9
             }}>
          <div className="p-6">
            <div className="text-sm mb-2" style={{ textShadow: '1px 1px 0px #92400e' }}>WORLD 2-2</div>
            <div className="flex items-center mb-4">
              <Syringe className="w-8 h-8 mr-2" />
              <h2 className="text-xl font-bold" style={{ textShadow: '2px 2px 0px #92400e' }}>MEDICATIONS</h2>
            </div>
            <p className="text-white">For Type 1 and some Type 2 diabetes, insulin and other medications can help regulate blood sugar levels. Consult with your doctor for the best treatment plan!</p>
          </div>
        </div>

        {/* Medications */}
        <div className="transform hover:-translate-y-2 transition-transform duration-200"
             style={{
               background: 'linear-gradient(#fcd34d, #f59e0b)',
               border: '4px solid #fff',
               boxShadow: '4px 4px 0px #92400e',
               borderRadius: '8px',
               opacity: 0.9
             }}>
          <div className="p-6">
            <div className="text-sm mb-2" style={{ textShadow: '1px 1px 0px #92400e' }}>WORLD 2-3</div>
            <div className="flex items-center mb-4">
              <Syringe className="w-8 h-8 mr-2" />
              <h2 className="text-xl font-bold" style={{ textShadow: '2px 2px 0px #92400e' }}>EXERCISE</h2>
            </div>
            <p className="text-white">Exercise is an essential part of managing diabetes, as it helps regulate blood sugar levels, improve insulin sensitivity, and maintain a healthy weight.</p>
          </div>
        </div>
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
            ⭐ FOR MORE INFO ⭐
          </p>
          <a className="text-sm" href= "https://www.mayoclinic.org/diseases-conditions/diabetes/symptoms-causes/syc-20371444"><u>Visit the Mayo Clinic&apos;s Website!</u></a>
        </div>
      </footer>
    </div>
  );
};

export default DiabetesPage;