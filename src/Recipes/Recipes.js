// Recipes.js
import React from 'react';
import { Circle, ExitContainer, Line } from '../GlobalStyles/GlobalElements';
import recipes from './Data'; // Adjust the path as necessary
import {
  RecipeCard,
  RecipeDescription,
  RecipeImage,
  RecipeLink,
  RecipeTitle,
  RecipesContainer
} from './RecipesElements'; // Adjust the path as necessary
export function Recipes({ isOpen, onClose }) {
  return (
    <RecipesContainer
      initial={{ x: '-100%' }}
      animate={isOpen ? { x: 0 } : { x: '-100%' }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <ExitContainer className='close-btn'  onClick={onClose}>
      <Circle>
          <Line className="one" />
          <Line className="two" />
        </Circle>
      </ExitContainer>
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id}>
          <RecipeImage src={recipe.imageUrl} alt={recipe.title} />
          <RecipeTitle>{recipe.title}</RecipeTitle>
          <RecipeDescription>{recipe.description}</RecipeDescription>
          <RecipeLink href={recipe.link}>Read More</RecipeLink>
        </RecipeCard>
      ))}
    </RecipesContainer>
  );
}
