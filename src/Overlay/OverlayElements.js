
import { IoIosCart, IoIosSearch } from "react-icons/io"; // Import the search icon
import styled from 'styled-components';
// ... other imports

// ... existing styled components

export const SearchIcon = styled(IoIosSearch)`
  font-size: 24px; // Example size, adjust as needed
  margin-left: 8px; // Spacing between text and icon
  // Add other styles if needed
`;

// Widescreen Top and Bottom Divs
export const WidescreenDiv = styled.div`
  position: fixed;
  left: 0;
  width: 100%;
  height: 60px;
  background: linear-gradient(90deg, #000, silver, #000);
  z-index: 20;

  &.top { top: 0; }
  &.bottom { bottom: 0; }
`;
// Logo Container
export const LogoContainer = styled.img`
  position: absolute;
  top: 2%;
  left: 1%;
  width: 72px;
  height: 85px;
`;

// Shopping Cart Container
export const ShoppingCartContainer = styled.div`
  position: absolute;
  top: 3%;
  right: 1%;
  width: 50px;
  height: 50px;
  background: white;
  border: 5px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ShoppingCartIcon = styled(IoIosCart)`
  font-size: 24px;
`;

// Shop Container
export const ShopContainer = styled.div`
  position: absolute;
  width: 75px;
  height: 50px;
  top: 3%;
  right: 6%; /* Adjust based on ShoppingCartContainer width and desired spacing */
  padding: 10px;
  background: white;
  border: 5px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Button
export const Button = styled.div`
  position: absolute;
  bottom: 3%;
  border: 2px solid white;
  padding: 10px;
  color: white;
  cursor: pointer;
`;

// Inspect Bottle Button
export const InspectBottleButton = styled(Button)`
  bottom: 3%;
  left: 50%;
  transform: translateX(-50%); // Center the button
`;

// Inspect Mode Buttons
export const TogglePeppersButton = styled(Button)`
  // Styles for the button
  left: 11.75%;
`;

export const EnableLightsButton = styled(Button)`
  // Styles for the button
  left: 3%;
`;

export const OurStoryButton = styled(Button)`
  left: 3%;
`;

export const RecipesButton = styled(Button)`
  left: calc(3% + 100px); /* Adjust based on button width */
`;

export const AboutButton = styled(Button)`
  right: 3%;
`;
