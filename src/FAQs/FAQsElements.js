// StyledFAQ.js
import { motion } from 'framer-motion';
import { MdCancel } from 'react-icons/md';

import styled, { keyframes } from 'styled-components';

export const FAQContainer = styled(motion.div)`
  position: fixed;
  right: 0;
  top: 0;
  width: 35vw;
  height: 100vh;
/*
* Created with https://www.css-gradient.com
* Gradient link: https://www.css-gradient.com/?c1=010101&c2=f8f03b&gt=r&gd=dtl
*/
background: #010101;
background: radial-gradient(at left top, #000, #000, #F8F03B, #000, #000);
  overflow-y: scroll;
  padding: 20px;
  box-sizing: border-box;
  z-index: 100;
`;



const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const PopUpContainer = styled(motion.div)`
    box-sizing: border-box;
    position: fixed;
    width: 800px;
    height: 600px;
    border-radius: 20px;
    overflow: scroll;
    left: 50%;
    transform: translateX(-50%);
    top: 15%;
    z-index: 99999999;
   // backdrop-filter: blur(10px);
    //border-radius: 70%;
    box-sizing: border-box;
    box-shadow: 10px 0px 20px 0px rgba(0, 0, 0, 0.2);

   // background-color: #fff;
   // background: rgb(239,238,255);
    background: radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%);
      background: -o-radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%);
      background: -webkit-radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%);

   background: ${({ isDarkMode }) => (isDarkMode ? 'radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)' : 'linear-gradient(90deg, rgba(239,238,255,1) 0%, rgba(234,234,255,1) 35%, rgba(255,255,255,1) 100%)')};
   //color: ${({ isDarkMode }) => (isDarkMode ? '#fff' : '#000')};
@media screen and (max-width: 1200px) {
       zoom: 0.9;
  
  

    }
    @media screen and (max-width: 960px) {
       zoom: 0.8;
       width: 700px;
    }

    @media screen and (max-width: 768px) {
 
      top: 25%;
        zoom: 0.7;
         }

    @media screen and (max-width: 550px) {
       zoom: 0.65;
  
       width: 650px;

    }
    @media screen and (max-width: 550px) {
       zoom: 0.6;
  
    }

`



// Container styled component
export const CloseContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 100px 0 0 0;
`;


export const ExitIcon = styled(MdCancel)` 
 cursor: pointer;
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#000' : '#fff')};
  border-radius: 100%;

 // transform: translate(10px, 10px) rotate()(180deg);
  transition: transform 3300ms ease-in-out;
  font-size: 32px; /* Adjust the font size as per your requirements */
//z-index: -10000000;
transform-origin: center;
display: flex;
  justify-content: center;
  align-items: center;
    //display: flex;
    &:hover {
   

}

`;


export const ExitIconWrap = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin: center; /* Set the transform origin to the center */

cursor: pointer;
  `



export const Wrapper = styled.div`

 // background: linear-gradient(270deg, #333, #555, #999, #CCC, #FFF);
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
position: fixed;
overflow: scroll;
  //height: 600px;
  width: 700px;
  //animation: ${gradientAnimation} 60s ease infinite;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  z-index: 99999999;
   // Hide scrollbar for Webkit browsers
   &::-webkit-scrollbar {
    display: none;
  }

  // Hide scrollbar for Firefox and others
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`;

/*
THIS CODE MOVES MODEL DOWN!
export const Wrapper = styled.div`

  background: linear-gradient(270deg, #333, #555, #999, #CCC, #FFF);

  height: 600px;
  width: 600px;
  animation: ${gradientAnimation} 60s ease infinite;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  z-index: 99999999;
`;
*/

export const AccordionButton = styled.div`
  width: 100%;
 // background-color: none;
//  border: 2px solid;
  position: relative;
  //border-image-source: linear-gradient(270deg, #333, #555, #999, #CCC, #FFF);
 // border-image-slice: 1;
  padding: 1em;
  transition: all 0.25s ease;
  //background: rgba(0, 0, 0, 0.1);


  font-size: 1em;
  color: #fff;
  outline: none;
  backdrop-filter: blur(10px);
  transition: all 200ms linear;
box-sizing: border-box;
border-bottom: 1px solid #e5e5e5;
  &:last-child {
    border-bottom: none;
  }
//box-shadow: 10px 0px 20px 0px rgba(0, 0, 0, 0.2);


  &:hover, &.active {
    //background: rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }
  &:hover,
  &:focus {
    color: #DA1A35; /* Use the provided dark green color */

    &::after {
      cursor: pointer;
      color: #DA1A35; /* Use the provided dark green color */
     // border: 1px solid #00ff01; /* Use the provided dark green color */
    }
  }
  &::after {
    content: '${props => (props.isActive ? '-' : '+')}'; // Use props to determine the content
    // ...other styles for the sign...
    position: absolute;
    right: 10px; // Position the sign to the right
    top: 50%;
    transform: translateY(-50%);
    
  }
`;

export const Panel = styled.div`

//background: rgba(255, 255, 255, 0.2);
margin: 0 2px;
transition: all 200ms linear;
//box-shadow: inset 0px 3px 20px rgba(0, 0, 0, 0.4);
backdrop-filter: blur(10px);

    box-sizing: border-box;
   // box-shadow: 10px 0px 20px 0px rgba(0, 0, 0, 0.2);

    color: #fff;
max-height: 0;
overflow: hidden;
//transition: max-height 1s ease-out;
transition: all 200ms linear;
  will-change: max-height;
padding: 0 1em;
color: black;

&.active {
  //transition: max-height 1s ease-out;
  max-height: 500px; // Adjust as needed
  
}
`;




///Relocate 

export const Container = styled.div`
  margin: 0 auto;
  margin-top: 0px;
  padding: 3rem;
  width: 32.5vw;
  height: 100vh;
  color: ${({ isDarkMode }) => (isDarkMode ? '#000' : '#fff')};
  h2 {
    font-size: 2.5em; // Adjust the font size as needed
    font-weight: 900; // Bold weight
    margin-bottom: 1em; // Space at the bottom of h2
  }

  h3 {
    text-transform: uppercase; // All caps
    font-weight: bold; // Bold weight
    margin-top: 5em; // Space at the top of h3
    
  }
`;

export const AccordionWrapper = styled.div`
  border-bottom: 1px solid #e5e5e5;
  border-bottom: ${({ isDarkMode }) => isDarkMode ? '1px solid #e5e5e5' : '1px solid #333'};
  color: ${({ isDarkMode }) => (isDarkMode ? '#000' : '#fff')};
  margin-bottom: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 15px;
  border-radius: 8px;
  &:last-child {
    border-bottom: none;
    
  }
`;

export const Button = styled.button`
  position: relative;
  display: block;
  text-align: left;
  width: 100%;
  padding: 1em 0;
 // color: #1f5210; /* Use the provided green color */
 color: ${({ isDarkMode }) => (isDarkMode ? '#000' : '#fff')};
  font-size: 1.15rem;
  font-weight: 400;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #DA1A35; /* Use the provided dark green color */

    &::after {
      cursor: pointer;
      color: #DA1A35; /* Use the provided dark green color */
     // border: 1px solid #00c5ff; /* Use the provided dark green color */
      
    }
  }
  &::after {
    content: '${props => (props.expanded ? '-' : '+')}'; // Use props to determine the content
    // ...other styles for the sign...
    position: absolute;
    right: 10px; // Position the sign to the right
    top: 50%;
    transform: translateY(-50%);
    
  }
`;

export const AccordionTitle = styled.span`
  padding: 1em 1.5em 1em 0;
`;

export const Icon = styled.span`
  display: inline-block;
  position: absolute;
  top: 18px;
  right: 0;
  width: 22px;
  height: 22px;
  border: 1px solid;
  border-radius: 22px;

  &::before {
    display: block;
    position: absolute;
    content: '';
    top: 9px;
    left: 5px;
    width: 10px;
    height: 2px;
    background: currentColor;
  }

  &::after {
    display: block;
    position: absolute;
    content: '';
    top: 5px;
    left: 9px;
    width: 2px;
    height: 10px;
    background: currentColor;
  }
`;

export const AccordionContent = styled.div`
  opacity: ${(props) => (props.expanded ? '1' : '0')};
  max-height: ${(props) => (props.expanded ? '100%' : '0')};
  margin-bottom: ${(props) => (props.expanded ? '25px' : '0')};
  overflow: hidden;
  transition: all 200ms linear;
  will-change: opacity, max-height;
  flex: ${(props) => (props.expanded ? '1' : '0')}; /* Push other items when expanded */

  p {
    font-size: 1rem;
    font-weight: 300;
    margin: 2em 0;
  }

`;

export const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;

`;