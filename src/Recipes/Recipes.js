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
  RecipesContainer,
  RecipesContainerWrap,
  RecipesWrap
} from './RecipesElements'; // Adjust the path as necessary
export function Recipes({ isOpen, onClose }) {
  return (
    <RecipesContainerWrap    
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 1 } }}
    exit={{ opacity: 0, transition: { duration: 1 } }} >
           <ExitContainer className='close-btn'  onClick={onClose}>
      <Circle>
          <Line className="one" />
          <Line className="two" />
        </Circle>
      </ExitContainer>
    <RecipesContainer

  >

    <RecipesWrap
    >
 
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id}>
          <RecipeImage src={recipe.imageUrl} alt={recipe.title} />
          <RecipeTitle>{recipe.title}</RecipeTitle>
          <RecipeDescription>{recipe.description}</RecipeDescription>
          <RecipeLink href={recipe.link}>Read More</RecipeLink>
        </RecipeCard>
      ))}
    </RecipesWrap>
    </RecipesContainer>
    </RecipesContainerWrap>
  );
}
