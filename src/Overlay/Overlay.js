import React, { useState } from 'react';

import FAQ from '../FAQs/FAQs';
import { OurStory } from '../OurStory/Story';
import { Recipes } from '../Recipes/Recipes';
import logo from '../media/SunnyIslandLogo.png';
import {
  AboutButton,
  EnableLightsButton,
  InspectBottleButton,
  LogoContainer,
  OurStoryButton,
  RecipesButton,
  SearchIcon,
  ShopContainer,
  ShoppingCartContainer,
  ShoppingCartIcon,
  TogglePeppersButton
} from './OverlayElements';

export function Overlay({inspectMode, setInspectMode, togglePeppers, toggleLights}) {
  const [showRecipes, setShowRecipes] = useState(false);
  const [showOurStory, setShowOurStory] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);


  const handleInspectClick = () => {
    setInspectMode(!inspectMode);
    // Implement orbit controls activation here if necessary
  };
  return (
    <>
      {!inspectMode && (
        <>
          <LogoContainer src={logo}/>
          <ShoppingCartContainer>
            <ShoppingCartIcon />
          </ShoppingCartContainer>
          <ShopContainer>SHOP</ShopContainer>
          <OurStoryButton onClick={() => setShowOurStory(true)}>Our Story</OurStoryButton>
          <RecipesButton onClick={() => setShowRecipes(true)}>Recipes</RecipesButton>
          <AboutButton onClick={() => setShowFAQ(true)}>FAQs</AboutButton>
        </>
      )}
      <InspectBottleButton onClick={handleInspectClick}>
        INSPECT BOTTLE <SearchIcon />
      </InspectBottleButton>

      {inspectMode && (
        <>
          <TogglePeppersButton onClick={togglePeppers}>Toggle Peppers</TogglePeppersButton>
          <EnableLightsButton onClick={toggleLights}>Toggle Lights</EnableLightsButton>
        </>
      )}

      {showOurStory && <OurStory isOpen={showOurStory} onClose={() => setShowOurStory(false)} />}
      {showRecipes && <Recipes isOpen={showRecipes} onClose={() => setShowRecipes(false)} />}
      {showFAQ && <FAQ isOpen={showFAQ} onClose={() => setShowFAQ(false)} />}
    </>
  );
}
