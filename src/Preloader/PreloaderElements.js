import { motion } from 'framer-motion';
import styled from 'styled-components';
export const Background = styled.div`
  position: fixed; // Changed from absolute to fixed
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const LoadingImage = styled(motion.img)`
  top: 0;
  left: 0;
  margin-left: -50px;
  width: 100px; // Adjust based on your loading image size
  height: 100px; // Adjust based on your loading image size
`;
