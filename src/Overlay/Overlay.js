import React, { useEffect, useRef, useState } from 'react';

import FAQ from '../FAQs/FAQs';
import { OurStory } from '../OurStory/Story';
import { Recipes } from '../Recipes/Recipes';
import logo from '../media/SunnyIslandLogo.png';
import {
  ContactCaption,
  ContactFormContainer,
  ContactFormHeader,
  ContactIcon,
  ContactIconContainer,
  ContactImage,
  ContactImageContainer,
  ContactInput,
  ContactPopup,
  ContactText,
  ContactTextarea,
  EnableLightsButton,
  FAQIcon,
  FAQIconContainer,
  FAQText,
  FacebookIcon,
  FlameText,
  FollowUsIcon,
  FollowUsIconContainer,
  FollowUsText,
  IconContainerWrap,
  InspectBottleButton,
  InstagramIcon,
  Logo,
  LogoContainer,
  OurStoryButton,
  RecipesButton,
  SearchIcon,
  SendButton,
  ShopContainer,
  ShoppingCartContainer,
  ShoppingCartIcon,
  SocialMediaPopup,
  TikTokIcon,
  TogglePeppersButton,
  YouTubeIcon
} from './OverlayElements';

export function Overlay({inspectMode, flameOn, setFlameOn, setInspectMode, togglePeppers, toggleLights, toggleFlame}) {
  const [showRecipes, setShowRecipes] = useState(false);
  const [showOurStory, setShowOurStory] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);
  const [showSocialPopup, setShowSocialPopup] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);

  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowSocialPopup(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [popupRef]);

  const handleSocialIconClick = (url) => {
    window.open(url, '_blank');
  };

  const handleInspectClick = () => {
    setInspectMode(!inspectMode);
    // Implement orbit controls activation here if necessary
  };
  const handleFlameClick = () => {
    toggleFlame();
    setFlameOn(!flameOn); // Toggle flameOn state
  };
  return (
    <>
      {!inspectMode && (
        <>
          <LogoContainer onClick={handleFlameClick}>
            <Logo src={logo} />
            <FlameText flameOn={flameOn}>FLAME ON</FlameText>
          </LogoContainer>
          <ShoppingCartContainer>
            <ShoppingCartIcon />
          </ShoppingCartContainer>
          <ShopContainer>SHOP</ShopContainer>
          <OurStoryButton onClick={() => setShowOurStory(true)}>Our Story</OurStoryButton>
          <RecipesButton onClick={() => setShowRecipes(true)}>Recipes</RecipesButton>
          <IconContainerWrap>
                {/* FAQ Icon */}
                <FAQIconContainer onClick={() => setShowFAQ(true)}>
                  <FAQIcon />
                  <FAQText>FAQs</FAQText>
                </FAQIconContainer>

                {/* Contact Icon */}
          
                <ContactIconContainer onClick={() => setShowContactPopup(true)}>
                  <ContactIcon />
                  <ContactText>CONTACT</ContactText>
                </ContactIconContainer>

                {/* Follow Us Icon */}
                <FollowUsIconContainer onClick={() => setShowSocialPopup(true)}>
                  <FollowUsIcon />
                  <FollowUsText>FOLLOW US!</FollowUsText>
               </FollowUsIconContainer>
       </IconContainerWrap>

        </>

        
      )}
      

      {showSocialPopup && (
        <SocialMediaPopup ref={popupRef}>
          <InstagramIcon onClick={() => handleSocialIconClick('https://instagram.com')}/>
          <FacebookIcon onClick={() => handleSocialIconClick('https://facebook.com')}/>
          <TikTokIcon onClick={() => handleSocialIconClick('https://tiktok.com')}/>
          <YouTubeIcon onClick={() => handleSocialIconClick('https://youtube.com')}/>
        </SocialMediaPopup>
      )}
      {/* Contact Popup */}
      {showContactPopup && (
        <ContactPopup>
          <ContactImageContainer>
            <ContactImage src="path_to_your_image.jpg" />
            <ContactCaption>Your caption here</ContactCaption>
          </ContactImageContainer>

          <ContactFormContainer>
            <ContactFormHeader>Contact Form</ContactFormHeader>
            <ContactInput type="text" placeholder="Name" />
            <ContactInput type="text" placeholder="Number" />
            <ContactInput type="email" placeholder="Email" />
            <ContactTextarea placeholder="Message"></ContactTextarea>
            <SendButton>Send Message</SendButton>
          </ContactFormContainer>
        </ContactPopup>
      )}

      <InspectBottleButton onClick={handleInspectClick}>
        INSPECT SAUCE! <SearchIcon />
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
