// StyledOurStory.js
import styled from 'styled-components';

export const OurStoryContainerWrapper = styled.div`
  position: fixed;
  left: 50%;
  top: 50%; /* Adjust to 50% to center vertically as well */
  transform: translate(-50%, -50%); /* Adjust for both X and Y axis */
  width: 90vw;
  height: 90vh;
  padding: 100px;
  background: linear-gradient(135deg, #000000, #DA1A35, #000000);
  overflow: hidden; /* Keep this for vertical scrolling */
  // Hide scrollbar for Chrome, Safari, and Opera
  &::-webkit-scrollbar {
    display: none;
  }

  // Hide scrollbar for IE, Edge, and Firefox
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  box-sizing: border-box;
  z-index: 100;
  border-radius: 30px;
  display: block;




  /* This media query seems to be redundant because it sets the same values as outside of any media query.
     Consider removing or adjusting it if you want different styles for other screen sizes. */


  @media (max-width: 601px) {
    width: 100vw; /* Keep 80vw width for larger screens */
    height: 100vh;
    border-radius: 0;
    overflow: hidden;
  }
`;
export const OurStoryContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%; /* Adjust to 50% to center vertically as well */
  transform: translate(-50%, -50%); /* Adjust for both X and Y axis */
  width: 90vw;
  height: 90vh;
  padding: 100px;
  background: linear-gradient(135deg, #000000, #DA1A35, #000000);
  overflow-y: scroll; /* Keep this for vertical scrolling */
  // Hide scrollbar for Chrome, Safari, and Opera
  &::-webkit-scrollbar {
    display: none;
  }

  // Hide scrollbar for IE, Edge, and Firefox
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  box-sizing: border-box;
  z-index: 100;
  border-radius: 30px;
  display: block;




  /* This media query seems to be redundant because it sets the same values as outside of any media query.
     Consider removing or adjusting it if you want different styles for other screen sizes. */


  @media (max-width: 601px) {
    width: 100vw; /* Keep 80vw width for larger screens */
    height: 100vh;
    border-radius: 0;
    //overflow: hidden;
  }
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
  @media (max-width: 600px) {
    flex-direction: column; // Stack the image and text vertically on small screens
  }
`;

export const GraphicColumn = styled.div`
  flex: 1;
  padding: 10px;
  // Add styles for the graphic column
  @media (max-width: 600px) {
    order: -1; // Ensure the text appears second
  }
`;

export const TextColumn = styled.div`
  flex: 1;
  padding: 10px;
  // Add styles for the text column
  @media (max-width: 600px) {
    order: 1; // Ensure the text appears second
    padding: 0px;
  }
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
