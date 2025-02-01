import styled from "styled-components";

const ArcadeButton = styled.button`
  background-color: #007bff; /* Mario-esque blue background */
  color: white;
  border: 3px solid #0056b3; /* Slightly darker blue for the border */
  padding: 12px 24px;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 6px; /* Slightly rounded corners */
  box-shadow: 0 0 2px #0056b3, 0 0 4px #007bff; /* Reduced glow effect */
  transition: all 0.3s ease;
  
  /* Subtle blocky text shadow */
  text-shadow: 0.5px 0.5px 0px #ff6600, 1px 1px 0px #ff3399;
  
  /* Grid background effect */
  background-image: 
    linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
    linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px);
  background-size: 12px 12px; /* Pixel grid */
  background-color: #007bff; /* Button background color */
  
  /* Hover effect: Slight color shift and glowing */
  &:hover {
    background-color: #0056b3;
    box-shadow: 0 0 8px #0056b3, 0 0 12px #007bff; /* Slightly stronger glow on hover */
    transform: translateY(-2px); /* Raise the button slightly */
  }

  /* Active effect: Shrink and glow on press */
  &:active {
    transform: scale(0.98); /* Slightly shrink on click */
    box-shadow: 0 0 4px #0056b3, 0 0 8px #007bff;
  }
`;

export default ArcadeButton;