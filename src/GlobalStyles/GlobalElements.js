// StyledFAQ.js
import { motion } from 'framer-motion';
import styled from 'styled-components';


// Line styled component
export const Line = styled.div`
  height: 20px;
  width: 3px;
  border-radius: 2px;
  background-color: black; // Lines are always black
  position: absolute;
  transition: all .5s;

  &.one {
    top: 15px;
    left: 23px;
    transform: rotate(45deg);
  }

  &.two {
    top: 15px;
    left: 23px;
    transform: rotate(-45deg);
  }
`;
// Circle styled component
export const Circle = styled.div`
  width: 50px;
  height: 50px;
  background-color: floralwhite; // Background remains white
  border-radius: 25px;
  margin: auto;
  box-shadow: 1px 1px 1px #565656;
  position: relative;
  transition: all .2s;

  &:hover {
    cursor: pointer;

     ${Line} {
      background-color: #DA135A; // Lines change to #DA135A on hover
      height: 32px;
      
      //transform: scale(1.2); // Lines scale larger on hover
      transition: all .2s;

  &.one {
    top: 10px;
    left: 23px;
    transform: rotate(45deg);
  }

  &.two {
    top: 10px;
    left: 23px;
    transform: rotate(-45deg);
  }
    }
  }
`;




export const ExitContainer = styled(motion.div)`
    position: absolute;

    right: 2.5%;
    transition: transform 30ms ease-in-out;
    top: 2.5%;
    cursor: pointer;
    transform-origin: center;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
   color: ${({ isDarkMode }) => (isDarkMode ? '#fff' : '#000')};
 

   &:hover {
    color: ${({ isDarkMode }) => (isDarkMode ? '#000' : '#fff')};
    //background-color: #000;
    //transform: translate(10px, 10px) rotate()(360deg);
      //right: -5px;
      //filter: drop-shadow(0 0 10px white);
  }
  &:hover ${Circle} {
    transform-origin: center;
    color: ${({ isDarkMode }) => (isDarkMode ? '#000' : '#fff')};
   // background-color: #000;
   // transform:  rotateZ(180deg);
    background-color: ${({ isDarkMode }) => (isDarkMode ? '#fff' : '#000')};
      filter: drop-shadow(0 0 5px white);
  }


`