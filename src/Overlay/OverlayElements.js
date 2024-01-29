import { FaFacebookF, FaInstagram, FaQuestionCircle, FaTiktok, FaYoutube } from "react-icons/fa"; // Import FAQ icon
import { IoIosCart, IoIosMail, IoIosPeople, IoIosSearch } from "react-icons/io"; // Import additional icons
import styled from 'styled-components';

// ... other imports

// ... existing styled components

export const SearchIcon = styled(IoIosSearch)`
  font-size: 24px; // Example size, adjust as needed
  margin-left: 8px; // Spacing between text and icon
  position: relative;
  //right: 5%;

  // Add other styles if needed
    @media (max-width: 600px) {
    transform: scale(0.7);
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
  cursor: pointer;
  justify-content: center;
  @media (max-width: 600px) {
    transform: scale(0.7);
  }
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
  cursor: pointer;
`;

// Button
export const Button = styled.div`
  position: absolute;
  bottom: 3%;
  border: 2px solid white;
  padding: 10px;
  color: white;
  cursor: pointer;
  @media (max-width: 600px) {
    transform: scale(0.7);
  }
`;

// Inspect Bottle Button
export const InspectBottleButton = styled(Button)`
  bottom: 3%;
  left: 50%;
  padding: 5px 20px 10px 20px;
  transform: translateX(-50%); // Center the button
  @media (max-width: 600px) {
    transform: translateX(-50%) scale(0.7);
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

&:hover {
  transform: scale(1.02); // Slightly increase size when hovered
  opacity: 0.8; // Reduce opacity when hovered
}

@media (max-width: 600px) {
  transform: scale(0.7); // Default scale for mobile
  &:hover {
    transform: scale(0.72); // Adjust hover scale for mobile
  }
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

&:hover {
  transform: scale(1.02); // Slightly increase size when hovered
  opacity: 0.8; // Reduce opacity when hovered
}

@media (max-width: 600px) {
  transform: scale(0.7); // Default scale for mobile
  &:hover {
    transform: scale(0.72); // Adjust hover scale for mobile
  }
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

&:hover {
  transform: scale(1.02); // Slightly increase size when hovered
  opacity: 0.8; // Reduce opacity when hovered
}

@media (max-width: 600px) {
  transform: scale(0.7); // Default scale for mobile
  &:hover {
    transform: scale(0.72); // Adjust hover scale for mobile
  }
}
`;

export const FollowUsIcon = styled(IoIosPeople)`
  font-size: 24px;
  border-radius: 100%;
  background-color: #fff;
  padding: 2px;
  z-index: 99999;

`;

export const FollowUsText = styled.span`
  font-size: 14px;
  color: white;
  margin-top: 8px;
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