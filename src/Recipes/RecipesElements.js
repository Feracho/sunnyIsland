// StyledRecipes.js
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const RecipesContainer = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 35vw;
  height: 100vh;
  background: linear-gradient(135deg, #000000, #DA1A35, #000000);
  overflow-y: scroll;
  padding: 20px;
  box-sizing: border-box;
  z-index: 100;
`;

export const RecipeCard = styled.div`
  margin-bottom: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 15px;
  border-radius: 8px;
`;

export const RecipeImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

export const RecipeTitle = styled.h2`
  font-weight: bold;
  color: #F8F03A;
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
  top: 10px;
  right: 10px;
`;
