import Link from 'next/link';
import styled from 'styled-components';

// Styled Navigation Bar
const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #ff3399, #00ccff);
  padding: 15px;
  border-bottom: 5px solid #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const NavLink = styled(Link)`
  margin: 0 20px;
  font-size: 1.5em;
  font-weight: bold;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.3s ease;
  padding: 10px 15px;
  border-radius: 8px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }
`;

const Navigation = () => {
  return (
    <NavBar>
      <NavLink href="/">🏠 Home</NavLink>
      <NavLink href="/dashboard">📊 Dashboard</NavLink>
      <NavLink href="/med-tracker">💊 Medications</NavLink>
      <NavLink href="/exercise-tracker">🏋️ Exercise</NavLink>
      <NavLink href="/meal-plan">🍽️ Meal Plan</NavLink>
    </NavBar>
  );
};

export default Navigation;
