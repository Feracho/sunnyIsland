import React, { useEffect, useRef, useState } from 'react';

import FAQ from '../FAQs/FAQs';
import { Circle, ExitContainer, Line } from '../GlobalStyles/GlobalElements';
import { OurStory } from '../OurStory/Story';
import { Recipes } from '../Recipes/Recipes';
import contact from '../media/SunnyIslandContactUs.png';
import logo from '../media/SunnyIslandLogo.png';
import ComingSoonPopup from './ComingSoon';
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
  ShopButton,
  ShoppingCartButton,
  ShoppingCartIcon,
  ShoppingContainer,
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
  const [isPopupOpen, setIsPopupOpen] = useState(false);
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
//pop up


  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <div id="overlay">
      {!inspectMode && (
        <>
          <LogoContainer onClick={handleFlameClick}>
            <Logo src={logo} />
            <FlameText flameOn={flameOn}>FLAME ON</FlameText>
          </LogoContainer>
          <ShoppingContainer onClick={handleOpenPopup}>
            <ShopButton>SHOP</ShopButton>
            <ShoppingCartButton>
              <ShoppingCartIcon />
            </ShoppingCartButton>
          </ShoppingContainer>
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
            <ExitContainer className='close-btn'  onClick={() => setShowContactPopup(false)}>
                <Circle>
                  <Line className="one" />
                  <Line className="two" />
                </Circle>
            </ExitContainer>
          <ContactImageContainer>
            <ContactImage src={contact} />
            <ContactCaption>Hit us up with your questions and concerns!</ContactCaption>
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
      {isPopupOpen && <ComingSoonPopup isOpen={isPopupOpen} onClose={handleClosePopup} />}
    </div>
  );
}
