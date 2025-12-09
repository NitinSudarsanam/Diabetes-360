# Diabetes 360

<div align="center">

![Diabetes 360 Banner](https://img.shields.io/badge/Health-Management-red?style=for-the-badge&logo=heart&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-15.1.6-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?style=for-the-badge&logo=mongodb&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**A gamified diabetes management platform that transforms health tracking into an engaging, retro-style experience.**

[Features](#key-features) • [Tech Stack](#tech-stack) • [Getting Started](#getting-started) • [Architecture](#architecture) • [Demo](#live-demo)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [API Integration](#api-integration)
- [Security](#security)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

**Diabetes 360** is a comprehensive, full-stack web application designed to revolutionize diabetes management through gamification. Inspired by retro 8-bit gaming aesthetics, the platform makes health tracking engaging and accessible while providing powerful analytics and AI-powered personalization.

### Problem Statement

Managing diabetes requires consistent daily monitoring of blood sugar, medication, diet, and exercise—tasks that can feel overwhelming and monotonous. Traditional health apps often lack engagement, leading to poor user adherence.

### Solution

Diabetes 360 transforms health management into an interactive "game" where users complete daily quests, unlock achievements, and visualize their health journey through intuitive dashboards and pixel-art design, increasing motivation and long-term engagement.

---

## Key Features

### **Comprehensive Health Dashboard**
- Real-time blood sugar monitoring with interactive Chart.js visualizations
- Weekly trend analysis with pixel-art styled line graphs
- Personalized health metrics tracking (weight, height, A1C levels)
- Historical data visualization for long-term health insights

### **Intelligent Medication Tracker**
- Digital medication log with dosage tracking
- Visual confirmation system for taken medications
- Add/remove medications dynamically
- Integration with user profiles for personalized recommendations

### **AI-Powered Meal Planning**
- Google Gemini AI integration for personalized meal suggestions
- Diabetic-friendly recipe recommendations
- Nutritional information and carb counting
- Dynamic meal plan generation with loading animations

### **Exercise Tracking System**
- Separate tracking for cardio and weight training activities
- Visual progress monitoring with animated charts
- Weekly exercise goals and completion tracking
- Integration with overall health metrics

### **Daily Quest System**
- Gamified task completion interface
- Six core daily health objectives:
  - Blood sugar monitoring
  - Physical activity
  - Healthy meal planning
  - Hydration tracking
  - Medication adherence
  - Progress logging

### **Secure Authentication System**
- JWT-based authentication with AWS App Runner backend
- Protected routes with authentication guards
- Persistent session management
- User profile data encryption

### **Educational Resources**
- Comprehensive diabetes information hub
- Type 1 vs Type 2 diabetes explanations
- Best practices for diabetes management
- Emergency contact information

### **Unique Retro-Gaming UI/UX**
- Custom pixel-art aesthetic inspired by classic 8-bit games
- Responsive grid-based layout
- Animated coin elements and hover effects
- "Super Mario Bros." inspired navigation ("World 1-1", "World 1-2", etc.)
- Smooth transitions and transform animations

---

## Tech Stack

### Frontend
```
Next.js 15.1.6        → React framework with App Router
React 19.0.0          → UI library with hooks and context
TypeScript 5.0        → Type-safe development
Tailwind CSS 3.4.1    → Utility-first styling
Styled Components     → CSS-in-JS for animations
Chart.js 4.4.7        → Data visualization
React-ChartJS-2       → React wrapper for Chart.js
Lucide React          → Modern icon library
```

### Backend & Services
```
AWS App Runner        → Serverless backend hosting
MongoDB               → NoSQL database for user data
JWT Authentication    → Secure token-based auth
Axios                 → HTTP client for API calls
Google Gemini AI      → AI-powered meal recommendations
```

### Development Tools
```
ESLint 9.0           → Code quality and linting
PostCSS              → CSS processing
Turbopack            → Next.js build optimization
```

---

## Architecture

### System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Client Layer (Browser)                  │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  Next.js App Router + React Components              │    │
│  │  - Server Components for SEO                        │    │
│  │  - Client Components for interactivity              │    │
│  └─────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
                            ↕ HTTPS
┌─────────────────────────────────────────────────────────────┐
│                    API Gateway Layer                        │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  AWS App Runner (Backend API)                       │    │
│  │  - /login          → JWT authentication             │    │
│  │  - /api/users      → User data retrieval            │    │
│  │  - /api/update     → Health data updates            │    │
│  └─────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
                            ↕
┌─────────────────────────────────────────────────────────────┐
│                   Data & Services Layer                     │
│  ┌──────────────────┐        ┌──────────────────────┐       │
│  │  MongoDB Atlas   │        │  Google Gemini AI    │       │
│  │  User Profiles   │        │  Meal Planning       │       │
│  │  Health Data     │        │  AI Recommendations  │       │
│  │  Medications     │        └──────────────────────┘       │
│  └──────────────────┘                                       │
└─────────────────────────────────────────────────────────────┘
```

### State Management

The application uses React Context API for global state management:

```typescript
GlobalStateContext
├── User Authentication Status
├── Personal Health Metrics
│   ├── Blood Sugar Levels
│   ├── Weight & Height
│   └── Diabetes Duration
├── Medication Records
├── Exercise Logs
│   ├── Cardio Activities
│   └── Weight Training
└── User Profile Data
```

### Route Protection

All authenticated routes implement a HOC pattern:

```typescript
useEffect(() => {
  if (!globalState.isAuthenticated) {
    router.push('/login');
  }
}, [globalState.isAuthenticated, router]);
```

---

## Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher) or **yarn** (v1.22.0 or higher)
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/NitinSudarsanam/Diabetes-360.git
   cd diabetes-360
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_API_BASE_URL=https://fgyis6cpq9.us-east-1.awsapprunner.com
   NEXT_PUBLIC_GEMINI_API_KEY=your_google_gemini_api_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

### Linting

```bash
npm run lint
```

---

## Project Structure

```
diabetes-360/
├── public/                      # Static assets
├── src/
│   └── app/
│       ├── components/          # Reusable React components
│       │   ├── Navigation.tsx   # Global navigation bar
│       │   └── PixelBackground.tsx  # Animated background
│       ├── context/             # React Context for state management
│       │   └── GlobalStateContext.js  # Global state provider
│       ├── dashboard/           # Main dashboard page
│       │   └── page.tsx         # Health metrics & charts
│       ├── daily-quests/        # Daily task tracker
│       │   └── page.tsx         # Quest completion interface
│       ├── diabetes-info/       # Educational resources
│       │   └── page.tsx         # Information hub
│       ├── exercise-tracker/    # Exercise logging
│       │   └── page.tsx         # Workout tracking interface
│       ├── login/               # Authentication
│       │   └── page.tsx         # Login form with JWT
│       ├── signup/              # User registration
│       │   └── page.tsx         # Account creation
│       ├── meal-plan/           # AI meal recommendations
│       │   └── page.tsx         # Gemini AI integration
│       ├── med-tracker/         # Medication management
│       │   └── page.tsx         # Medication CRUD interface
│       ├── update-stats/        # Profile updates
│       │   └── page.tsx         # Health data entry form
│       ├── layout.tsx           # Root layout with providers
│       ├── page.tsx             # Homepage
│       └── globals.css          # Global styles
├── backend/                     # Backend code (if applicable)
├── eslint.config.mjs           # ESLint configuration
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies and scripts
└── README.md                   # Project documentation
```

---

## API Integration

### Authentication Endpoint

**POST** `/login`

```typescript
// Request
{
  email: string;
  password: string;
}

// Response
{
  token: string;  // JWT token
}
```

### User Data Endpoint

**GET** `/api/users`

```typescript
// Headers
{
  address: string;  // User email
}

// Response
{
  name: string;
  email: string;
  age: number;
  height: number;
  weight: number;
  bloodSugar: number;
  diabetesDuration: number;
  meds: Array<[string, string, number]>;
  cardioLog: Array<[string, number]>;
  weightsLog: Array<[string, number]>;
}
```

### Google Gemini AI Integration

The meal plan feature leverages Google's Generative AI:

```typescript
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const result = await model.generateContent(
  "Generate a diabetic-friendly meal plan..."
);
```

---

## Security

### Implementation Highlights

- **JWT Authentication**: Secure token-based authentication with httpOnly cookies
- **Protected Routes**: Client-side route guards prevent unauthorized access
- **HTTPS**: All API communications use encrypted connections
- **Input Validation**: Form inputs sanitized to prevent XSS attacks
- **Environment Variables**: Sensitive keys stored in `.env.local`

### Best Practices

- Passwords are never stored in plaintext (backend responsibility)
- Tokens expire after session timeout
- CORS policies restrict unauthorized origins
- No sensitive data in client-side code

---

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Standards

- Follow TypeScript best practices
- Use ESLint configuration provided
- Write meaningful commit messages
- Add comments for complex logic
- Update documentation for new features

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Authors

**Nitin Sudarsanam**

- GitHub: [@NitinSudarsanam](https://github.com/NitinSudarsanam)
- LinkedIn: [Connect with me](https://linkedin.com/in/nitin-sudarsanam)
- Email: nitin_sudarsanam@brown.edu

---

**Pierre Joseph**

---

**Caleb Ellenberg**

---

## Acknowledgments

- Next.js team for the amazing framework
- Chart.js for beautiful data visualizations
- Google for Gemini AI API access
- The diabetes community for inspiration and feedback
- Nintendo for the retro gaming aesthetic inspiration

---

## Project Stats

![GitHub repo size](https://img.shields.io/github/repo-size/NitinSudarsanam/Diabetes-360?style=flat-square)
![GitHub code size](https://img.shields.io/github/languages/code-size/NitinSudarsanam/Diabetes-360?style=flat-square)
![GitHub language count](https://img.shields.io/github/languages/count/NitinSudarsanam/Diabetes-360?style=flat-square)
![GitHub top language](https://img.shields.io/github/languages/top/NitinSudarsanam/Diabetes-360?style=flat-square)

---

<div align="center">

**If you find this project helpful, please consider giving it a star!**

Made with care by Nitin Sudarsanam

</div>
