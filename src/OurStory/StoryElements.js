// StyledOurStory.js
import styled from 'styled-components';
import bullet from '../media/SunnyIslandSymbol.png';
export const OurStoryContainerWrapper = styled.div`
  position: fixed;
  left: 50%;
  top: 50%; /* Adjust to 50% to center vertically as well */
  transform: translate(-50%, -50%); /* Adjust for both X and Y axis */
  width: 70vw;
  height: 85vh;
  padding: 100px;
  background-color: #FBDA61;
background-image: linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%);



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
  background-color: #FBDA61;
background-image: linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%);


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
export const ImageWrapper = styled.div`
  width: 100%; // Take up all available width
  display: flex; // Use flexbox for easy centering
  justify-content: center; // Center horizontally
  align-items: center; // Center vertically
  padding: 0 20px; // Add some padding on the sides

  @media (max-width: 600px) {
    padding: 0 0; // Reduce padding on smaller screens to fit content within viewport margins
  width: 90vw;
  }
`;

// Adjust StoryImage component for responsiveness
export const StoryImage = styled.img`
  max-width: 100%; // Ensure it doesn't exceed the wrapper's width
  height: auto; // Maintain aspect ratio
  object-fit: cover; // Ensures the image covers the area without stretching
  border-radius: 10px; // Optional: Adds rounded corners to the image
`;

export const StorySection = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  flex-direction: column;
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
  margin-left: 40%;

  // Add styles for the text column
  @media (max-width: 600px) {
    margin-left: unset;
    order: 1; // Ensure the text appears second
    padding: 0px;
    width: 85vw;
  }
`;

export const StoryTopline = styled.h3`
  font-weight: bold;
  color: #F8F03A;
  font-size: 24px;
  text-transform: uppercase;
  margin-bottom: -25px;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.4); // Faux outline effect
  @media (max-width: 600px) {
    font-size: 16.5px;
  }
  // Additional styles for topline
`;

export const StoryHeader = styled.h2`
  font-weight: black;
  color: #F8F03A;
  font-size: 28px;
  text-transform: uppercase;
  width: 90vw;
  margin-bottom: -10px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5); // Soft drop shadow for depth
  @media (max-width: 600px) {
    font-size: 20px;
  }
  // Additional styles for header
`;

export const StoryDescription = styled.p`
  color: white;
  font-size: 20px;
  width: 60vw;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.3); // Light drop shadow for readability
  @media (max-width: 600px) {
    font-size: 12.5px;
    width: 50vw;
  }
  // Additional styles for description
`;

export const BulletList = styled.ul`
  list-style: none; // Remove default list styling
  padding: 0px; // Reset padding to align with custom bullets
  margin: 0; // Adjust margin as needed
  font-size: 16.5px;
  margin-bottom: 150px;
  @media (max-width: 600px) {
    font-size: 10.5px;
    margin-bottom: 50px;
  }
`;

export const BulletPoint = styled.li`
  background-image: url(${bullet}); // Use the custom bullet image
  background-repeat: no-repeat;
  background-size: 20px 20px; // Adjust size of bullet image as needed
  background-position: left center;
  padding: 2px;
  color: white;
  position: relative;
  left: 10px;
  text-indent: 25px;
  text-shadow: 0.2px 0.2px 0px #000, 
               -0.2px 0.2px 0px #000, 
              0.2px 0.2px 0px #000, 
               -0.2px 0.2px 0px #000; // Faux outline for contrast against the background
               text-shadow: 1px 1px 2px rgba(0,0,0,0.1); 
  @media (max-width: 600px) {
    padding-left: 25px; // Adjust for smaller screens if necessary
  }
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
