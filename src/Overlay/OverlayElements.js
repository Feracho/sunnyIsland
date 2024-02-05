import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaQuestionCircle, FaTiktok, FaYoutube } from "react-icons/fa"; // Import FAQ icon
import { IoIosCart, IoIosMail, IoIosPeople, IoIosSearch } from "react-icons/io"; // Import additional icons
import styled from 'styled-components';

// ... other imports

// ... existing styled components

export const SearchIcon = styled(IoIosSearch)`
  font-size: 24px; // Example size, adjust as needed
  margin-left: 8px; // Spacing between text and icon
  position: relative;
  top: 5px; 
  //right: 5%;

  // Add other styles if needed
    @media (max-width: 600px) {
    transform: scale(1.5);


  }
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

export const Logo = styled.img`
  position: absolute;

  width: 72px;
  height: 85px;

`
// Logo Container
export const LogoContainer = styled.div`
  position: fixed;
  top: 2%;
  left: 1%;
  width: 80px;
  height: 100px;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out; // Smooth transition for the glow effect



  &:hover span {
    color: #DA1A35;
  }
`;

export const FlameText = styled.span`
  display: block;
  color: white;
  text-align: center;
  margin-top: 8px; // Adjust as needed for spacing
  font-size: 14px; // Adjust as needed
  transition: color 0.3s ease;

  // This will keep the color #DA1A35 when toggleFlame is active
  ${({ flameOn }) => flameOn && `color: #DA1A35;`}
`;

export const ComingSoonContainer = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50vw;
  height: 30vh;
  background-color: white;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 100;
  font-size: 2rem;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    width: 100vw;
    height: 100vh;
    border-radius: 0;
  }
`;

// Assuming Circle, ExitContainer, and Line are defined elsewhere in your GlobalStyles

// Combined Shopping Container
export const ShoppingContainer = styled.div`
  position: absolute;
  top: 3%;
  right: 1%;
  width: 120px; // Adjust width to fit both SHOP and icon
  height: 50px;
  background: white;
  border: 5px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between; // Use space-between to separate shop and cart icon
  cursor: pointer;
  @media (max-width: 600px) {
    transform: scale(0.7);
    top: 8%;
  }
`;

// Individual Shop Button
export const ShopButton = styled.div`
  flex: 2; // Occupies 75% of the space
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative; // Relative positioning to place pseudo-element

  // Pseudo-element for right border
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%); // Center vertically
    width: 2px; // Width of the border
    height: 70%; // Half the height of the container
    background-color: black;
  }
  &:hover {
    box-shadow: 0 0 8px 2px rgba(255, 255, 255, 0.6); // Adjust the color and size as needed
  }
`;

// Individual Shopping Cart Button
export const ShoppingCartButton = styled.div`
  flex: 1; // Occupies 25% of the space
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  &:hover {
    box-shadow: 0 0 8px 2px rgba(255, 255, 255, 0.6); // Adjust the color and size as needed
  }
`;

// Shopping Cart Icon
export const ShoppingCartIcon = styled(IoIosCart)`
  font-size: 24px;

`;

// Button
export const Button = styled.div`
  position: absolute;
  bottom: 3%;
  border: 2px solid white;
  padding: 10px;
  color: white;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 8px 2px rgba(255, 255, 255, 0.6); // Adjust the color and size as needed
  }
  @media (max-width: 600px) {
    transform: scale(0.7);
  }
`;

// Inspect Bottle Button
export const InspectBottleButton = styled(Button)`
  bottom: 3%;
  left: 50%;
  padding: 10px 15px 15px 20px;
  transform: translateX(-50%); // Center the button
  @media (max-width: 600px) {
    transform: translateX(-50%) scale(1);
  }
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
  @media (max-width: 600px) {
    left: unset; /* Reset left alignment */
    right: 3%; /* Align button to the right with 3% spacing */
  }
`;



export const IconContainerWrap = styled.div`
  // Other styles for IconContainerWrap remain unchanged

  @media (max-width: 600px) {
    height: 100px; // Adjust the height to fit all icons evenly spaced
    width: 50px; // Set a specific width
    border-radius: 10px;
    display: flex;
    position: fixed;
    background-color: #aaaaaa;
    right: -3%; // Positioned 3% from the right of the screen
    bottom: 15%; // Positioned 10% from the bottom of the screen
    flex-direction: column; // Stack the icons vertically
    justify-content: space-around; // Evenly space the icons vertically
    align-items: center; // Center the icons horizontally
    padding: 10px 0; // Add padding at the top and bottom for spacing
    box-shadow: 0 2px 5px rgba(0,0,0,0.2); // Optional: add a shadow for better visibility
    transform: scale(1.5);
  }
`;





export const FAQs = styled(Button)`
  right: 3%;
`;

export const FAQIconContainer = styled.div`
  position: absolute;
  right: 3%; // Adjust as necessary
  bottom: 3%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  transition: transform 0.2s ease-in-out, opacity 0.2s ease; // Smooth transition for hover effect
  z-index: 99999;

  &:hover > * {
  transform: scale(1.02); // Slightly increase size when hovered
  box-shadow: 0 0 8px 2px rgba(255, 255, 255, 0.6); 
  }


  @media (max-width: 600px) {
    bottom: 5%;
  right: 42.5%; 
  }
`;

export const FAQIcon = styled(FaQuestionCircle)`
  font-size: 24px;
  border-radius: 100%;
  background-color: #fff;
  padding: 2px;

`;

export const FAQText = styled.span`
  font-size: 14px; // Adjust as needed
  color: white;
  margin-top: 8px; // Spacing between icon and text
  @media (max-width: 600px) {
    display: none;
  }
`;

export const ContactIconContainer = styled.div`
  position: absolute;
  right: 7.5%; // Adjust based on FAQIconContainer width and desired spacing
  bottom: 3%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  transition: transform 0.2s ease-in-out, opacity 0.2s ease; // Smooth transition for hover effect
  z-index: 99999;
  &:hover > * {
  transform: scale(1.02); // Slightly increase size when hovered
  box-shadow: 0 0 8px 2px rgba(255, 255, 255, 0.6); 
  }


  @media (max-width: 600px) {
    bottom: 37.5%;
  right: 42.5%; 
  }
`;


export const ContactIcon = styled(IoIosMail)`
  font-size: 24px;
  border-radius: 100%;
  background-color: #fff;
  padding: 2px;

`;

export const ContactText = styled.span`
  font-size: 14px;
  color: white;
  margin-top: 8px;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const FollowUsIconContainer = styled.div`
  position: absolute;
  right: 14%; // Adjust based on ContactIconContainer width and desired spacing
  bottom: 3%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  transition: transform 0.2s ease-in-out, opacity 0.2s ease; // Smooth transition for hover effect
  z-index: 99999;
  &:hover > * {
  transform: scale(1.02); // Slightly increase size when hovered
  box-shadow: 0 0 8px 2px rgba(255, 255, 255, 0.6); 
  
  }


@media (max-width: 600px) {
  bottom: 70%;
  right: 42.5%; 

}
`;

export const FollowUsIcon = styled(IoIosPeople)`
  font-size: 24px;
  border-radius: 100%;
  background-color: #fff;
  padding: 2px;
  


`;

export const FollowUsText = styled.span`
  font-size: 14px;
  color: white;
  margin-top: 8px;
  @media (max-width: 600px) {
    display: none;
  }
`;

// Social Media Popup
export const SocialMediaPopup = styled.div`
  position: absolute;
  bottom: 50px; // Adjust as needed to position above the FollowUsIconContainer
  right: 14%; // Align with the Follow Us button
  background: white;
  padding: 10px;
  border-radius: 8px;
  display: flex;
  justify-content: space-around;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  z-index: 9999999999; // Ensure it's above other elements
  @media (max-width: 600px) {
    right: 8%; 
    bottom: 195px;
  }
`;

// Social Media Icon
const SocialIconStyle = styled.div`
  font-size: 24px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
z-index: 9999999;
  &:hover {
    transform: scale(1.05);
  }
`;

export const InstagramIcon = styled(FaInstagram)`
  ${SocialIconStyle}
`;

export const FacebookIcon = styled(FaFacebookF)`
  ${SocialIconStyle}
`;

export const TikTokIcon = styled(FaTiktok)`
  ${SocialIconStyle}
`;

export const YouTubeIcon = styled(FaYoutube)`
  ${SocialIconStyle}
`;




//Contact Form Elements:


export const ContactPopup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70vw;
  height: 55vh;
  background: linear-gradient(
    135deg,
    #ffd701, 
    #ffcd01, 
    #ffc100, 
    #fa9006, 
    #f45d00, 
    #f65d02, 
    #fd6e10, 
    #ff460d, 
    #df0916, 
    #c4021c, 
    #ba031d, 
    #af0123, 
    #960127, 
    #8b0329, 
    #7e0028, 
    #79012a
  );
  color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  z-index: 1000; // Ensure it's above other elements
  padding: 20px;
`;

export const ContactImageContainer = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContactImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

export const ContactCaption = styled.span`
  margin-top: 10px;
  font-size: 14px;
  color: #333;
`;

export const ContactFormContainer = styled.div`

  width: 35%;
  margin-right: 5%;
`;

export const ContactFormHeader = styled.h2`
  margin-bottom: 20px;
  color: #fff;
  font-weight: 900;
  text-transform: uppercase;
`;

export const ContactInput = styled.input`
  width: 30vw;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const ContactTextarea = styled.textarea`
  width: 30vw;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: calc(2.5 * 40px); // Adjust the height as needed
`;

export const SendButton = styled.button`
  width: 30vw;
  padding: 10px;
  border: none;
  background-color: #000;
  font-weight: 900;
  text-transform: uppercase;
  color: white;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;