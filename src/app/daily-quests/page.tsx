"use client"

import React from 'react';
import { Heart, Activity, Apple, Syringe, Book, CheckCircle } from 'lucide-react';
import Navigation from '@/app/components/Navigation';

const DailyQuests = () => {
  return (
    <div className="min-h-screen bg-sky-400 p-8 text-white font-mono relative overflow-hidden" style={{
      backgroundImage: 'linear-gradient(transparent 95%, #7dd3fc 95%), linear-gradient(90deg, transparent 95%, #7dd3fc 95%)',
      backgroundSize: '40px 40px'
    }}>
      <Navigation />
      
      {/* Floating Coins (decorative) */}
      <h1 className="text-4xl font-bold text-center mb-8"
          style={{ textShadow: '3px 3px 0px #0369a1', padding: '20px 20px 20px' }}>
      </h1>
      <div className="absolute top-20 right-20 animate-bounce text-amber-200 text-4xl opacity-80">●</div>
      <div className="absolute top-40 left-32 animate-bounce text-amber-200 text-4xl opacity-80" style={{ animationDelay: '0.5s' }}>●</div>
      <div className="absolute bottom-20 right-40 animate-bounce text-amber-200 text-4xl opacity-80" style={{ animationDelay: '0.3s' }}>●</div>

      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-6xl font-bold mb-4 p-6 rounded-lg inline-block"
            style={{
              background: 'linear-gradient(#ef4444, #dc2626)',
              textShadow: '4px 4px 0px #991b1b',
              border: '4px solid #fff',
              opacity: 0.9
            }}>
          DAILY QUESTS: DIABETES ADVENTURE
        </h1>
        <p className="text-2xl text-white" style={{ textShadow: '2px 2px 0px #0369a1' }}>
          ★ Complete these quests to level up your diabetes management! ★
        </p>
      </header>

      {/* Daily Quests Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Quest Boxes */}
        {[ 
          { icon: CheckCircle, title: "Check Blood Sugar", desc: "Track your blood sugar levels today!" },
          { icon: Activity, title: "Get Moving", desc: "Complete 30 minutes of physical activity!" },
          { icon: Apple, title: "Healthy Meal", desc: "Plan and eat a balanced, diabetes-friendly meal!" },
          { icon: Heart, title: "Hydrate", desc: "Drink at least 8 glasses of water!" },
          { icon: Syringe, title: "Take Medication", desc: "Ensure you take your prescribed medication!" },
          { icon: Book, title: "Record Your Progress", desc: "Log your health and wellness details for the day!" }
        ].map((quest, index) => (
          <div key={index}
               className="transform hover:-translate-y-2 transition-transform duration-200"
               style={{
                 background: 'linear-gradient(#fcd34d, #f59e0b)',
                 border: '4px solid #fff',
                 boxShadow: '4px 4px 0px #92400e',
                 borderRadius: '8px',
                 opacity: 0.9
               }}>
            <div className="p-6">
              <div className="text-sm mb-2" style={{ textShadow: '1px 1px 0px #92400e' }}>{quest.title}</div>
              <div className="flex items-center mb-4">
                <quest.icon className="w-8 h-8 mr-2" />
                <h2 className="text-xl font-bold" style={{ textShadow: '2px 2px 0px #92400e' }}>{quest.desc}</h2>
              </div>
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
            ⭐ KEEP UP THE GOOD WORK! ⭐
          </p>
          <p className="text-sm">Press B to Go Back | Press A to Complete Quest | Press START for Help</p>
        </div>
      </footer>
    </div>
  );
};

export default DailyQuests;