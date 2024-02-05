import styled from 'styled-components';
export const Background2 = styled.div`
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

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black; // Assuming you want a black background for the loading screen
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; // High z-index to ensure it covers other elements
`;

export const LoadingImageWrap = styled.div`
  width: 295px; // Adjust based on your loading image size
  height: 295px; // Adjust based on your loading image size
  display: flex; // Use flexbox for centering
  justify-content: center; // Center horizontally
  align-items: center; // Center vertically
`;

export const LoadingImage = styled.img`
  max-width: 100%; // Ensure it is responsive and doesn't overflow its container
  height: auto; // Maintain aspect ratio
  transform: scale(0.5); // Apply your scale transform here
  // No need for positioning or translation transforms since the parent does the centering
`;
