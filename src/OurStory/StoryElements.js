// StyledOurStory.js
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const OurStoryContainer = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 50vw;
  height: 100vh;
  background: linear-gradient(135deg, #000000, #DA1A35, #000000);
  overflow-y: scroll;
  padding: 20px;
  box-sizing: border-box;
  z-index: 100;
`;
export const StoryImage = styled.img`
  width: 460px;
  height: 460px;
  object-fit: cover; // Ensures the image covers the area without stretching
  margin-bottom: 20px; // Add space between the image and the text
  border-radius: 10px; // Optional: Adds rounded corners to the image
  // Add any other styles as needed
`;

export const StorySection = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
`;

export const GraphicColumn = styled.div`
  flex: 1;
  padding: 10px;
  // Add styles for the graphic column
`;

export const TextColumn = styled.div`
  flex: 1;
  padding: 10px;
  // Add styles for the text column
`;

export const StoryTopline = styled.h3`
  font-weight: bold;
  color: #F8F03A;
  // Add additional styles for topline
`;

export const StoryHeader = styled.h2`
  font-weight: bold;
  color: #F8F03A;
  // Add additional styles for header
`;

export const StoryDescription = styled.p`
  color: white;
  // Add additional styles for description
`;
export const BulletPoint = styled.li`
  color: white;
  // Add additional styles for bullet points
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
