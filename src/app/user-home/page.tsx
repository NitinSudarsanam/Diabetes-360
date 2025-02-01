"use client"

import React from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import Navigation from '@/app/components/Navigation';
import { useRouter } from 'next/navigation';

// Styled Components
const Container = styled.div`
  width: 100%;
  margin: 0;
  padding: 20px;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #ff66cc, #00ccff);
  padding: 50px 20px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
`;

const HeroContent = styled.div``;

const HeroHeading = styled.h1`
  font-size: 3em;
  color: #fff;
`;

const HeroParagraph = styled.p`
  font-size: 1.5em;
  color: #fff;
`;

const StartButton = styled.button`
  background-color: #ff3399;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1.2em;
  cursor: pointer;
  border-radius: 5px;
`;

const FeaturesSection = styled.section`
  padding: 40px 20px;
  background-color: #222;
  text-align: center;
`;

const FeaturesHeading = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
`;

const FeaturePanels = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Panel = styled.div`
  background: #444;
  padding: 20px;
  border-radius: 8px;
  width: 25%;
`;

const PanelHeading = styled.h3`
  font-size: 1.8em;
  color: #ff3399;
`;

const PanelParagraph = styled.p`
  font-size: 1.2em;
  color: #fff;
`;

const AchievementsSection = styled.section`
  background-color: #222;
  padding: 40px 20px;
  text-align: center;
`;

const AchievementsHeading = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
`;

const AchievementsList = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Achievement = styled.div`
  background: #444;
  padding: 20px;
  margin: 10px;
  width: 30%;
  border-radius: 8px;
`;

const AchievementHeading = styled.h3`
  font-size: 1.5em;
  color: #ff3399;
`;

const UnlockButton = styled.button`
  background-color: #00ccff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1.2em;
  cursor: pointer;
  border-radius: 5px;
`;

const CommunitySection = styled.section`
  padding: 40px 20px;
  text-align: center;
  background-color: #333;
`;

const CommunityHeading = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
`;

const JoinButton = styled.button`
  background-color: #ff66cc;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1.2em;
  cursor: pointer;
  border-radius: 5px;
`;

const UserHome: NextPage = () => {
    const router = useRouter();
  return (
    <Container>
    <Navigation />
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <HeroHeading>Welcome to Diabetes360: Level Up Your Health!</HeroHeading>
          <HeroParagraph>The ultimate game plan for managing your diabetes—track your sugar levels, build better habits, and score your way to healthier living!</HeroParagraph>
          <StartButton onClick={() => router.push('/dashboard')}>Access Your Profile!</StartButton>
        </HeroContent>
      </HeroSection>

      {/* Features Section */}
      <FeaturesSection>
        <FeaturesHeading>Your Diabetes Quest Starts Here!</FeaturesHeading>
        <FeaturePanels>
          <Panel>
            <PanelHeading>Blood Sugar Tracker</PanelHeading>
            <PanelParagraph>Track your progress, see the high scores, and improve your gameplay with your blood sugar readings!</PanelParagraph>
          </Panel>
          <Panel>
            <PanelHeading>Meal Planner</PanelHeading>
            <PanelParagraph>Choose your power-ups and avoid the sugar traps with healthy meal plans!</PanelParagraph>
          </Panel>
          <Panel>
            <PanelHeading>Exercise Tracker</PanelHeading>
            <PanelParagraph>Boost your energy and stamina with custom workouts tailored to your needs!</PanelParagraph>
          </Panel>
        </FeaturePanels>
      </FeaturesSection>

      {/* Achievements Section */}
      <AchievementsSection>
        <AchievementsHeading>Unlock Achievements & Rewards!</AchievementsHeading>
        <AchievementsList>
          <Achievement>
            <AchievementHeading>Sugar Level Boss</AchievementHeading>
            <p>Achieve a week of stable blood sugar levels.</p>
          </Achievement>
          <Achievement>
            <AchievementHeading>Meal Master</AchievementHeading>
            <p>Log 10 days of meals consistently.</p>
          </Achievement>
          <Achievement>
            <AchievementHeading>Fitness Fanatic</AchievementHeading>
            <p>Complete 30 days of exercise tracking.</p>
          </Achievement>
        </AchievementsList>
        <UnlockButton>Unlock Your First Badge!</UnlockButton>
      </AchievementsSection>

      {/* Community Section */}
      <CommunitySection>
        <CommunityHeading>Join the Diabetes360 Crew!</CommunityHeading>
        <p>Join our community of diabetes players! Share your progress, ask questions, and get support from fellow players who are leveling up their health.</p>
        <JoinButton>Join the Forum</JoinButton>
      </CommunitySection>
    </Container>
  );
};

export default UserHome;