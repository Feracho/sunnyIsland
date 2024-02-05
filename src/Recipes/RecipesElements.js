import { motion } from 'framer-motion';
import styled from 'styled-components';


export const RecipesContainerWrap =  styled.div`
  position: fixed;
  left: 50%;
  top: 50%; /* Adjust to 50% to center vertically as well */
  transform: translate(-50%, -50%); /* Adjust for both X and Y axis */
  width: 90vw;
  height: 90vh;
overflow: hidden;

`
export const RecipesContainer =  styled.div`
  position: fixed;
  left: 50%;
  top: 50%; /* Adjust to 50% to center vertically as well */
  transform: translate(-50%, -50%); /* Adjust for both X and Y axis */
  width: 90vw;
  height: 90vh;
  background: linear-gradient(135deg, #000000, #DA1A35, #000000);
  overflow-y: scroll; /* Keep this for vertical scrolling */
  // Hide scrollbar for Chrome, Safari, and Opera
  &::-webkit-scrollbar {
    display: none;
  }

  // Hide scrollbar for IE, Edge, and Firefox
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  box-sizing: border-box;
  z-index: 100;
  border-radius: 30px;
  display: block;


  @media (min-width: 601px) and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr); /* Adjust for 2 columns */
  }

  /* This media query seems to be redundant because it sets the same values as outside of any media query.
     Consider removing or adjusting it if you want different styles for other screen sizes. */


  @media (max-width: 601px) {
    width: 100vw; /* Keep 80vw width for larger screens */
    height: 100vh;
    grid-template-columns: repeat(3, 1fr); /* Adjust back to 3 columns */
    border-radius: 0;
  }
`
export const RecipesWrap = styled(motion.div)`
  padding: 100px;
  display: grid;
  
  grid-template-columns: repeat(3, 1fr); /* Start with 3 columns */
  grid-gap: 35px; /* Space between cards */
  justify-content: center;
  align-content: start;

  @media (min-width: 601px) and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr); /* Adjust for 2 columns */
  }

  /* This media query seems to be redundant because it sets the same values as outside of any media query.
     Consider removing or adjusting it if you want different styles for other screen sizes. */


  @media (max-width: 601px) {
    width: 100vw; /* Keep 80vw width for larger screens */
    height: 100vh;
    grid-template-columns: repeat(1, 1fr); /* Adjust back to 3 columns */
    border-radius: 0;
    padding: 50px;
  }
`;

export const RecipeCard = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  padding: 15px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

export const RecipeImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

export const RecipeTitle = styled.h2`
  font-weight: bold;
  color: #F8F03A;
  margin: 10px 0;
`;

export const RecipeDescription = styled.p`
  color: white;
`;

export const RecipeLink = styled.a`
  display: inline-block;
  background-color: #DA1A35;
  color: #fff;
  padding: 10px 15px;
  margin-top: 10px;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #C1192E;
  }
`;

export const CloseButton = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  position: absolute;
  top: 20px;
  right: 20px;
`;
