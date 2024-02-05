// OurStory.js
import React from 'react';
import { Circle, ExitContainer, Line } from '../GlobalStyles/GlobalElements';
import storyData from './Data';
import {
  BulletList,
  BulletPoint,
  ImageWrapper,
  OurStoryContainer,
  OurStoryContainerWrapper,
  StoryDescription,
  StoryHeader,
  StoryImage,
  StorySection,
  StoryTopline,
  TextColumn
} from './StoryElements'; // Adjust path as necessary

export function OurStory({ isOpen, onClose }) {
  return (
    <OurStoryContainerWrapper>
              <ExitContainer className='close-btn'  onClick={onClose}>
      <Circle>
          <Line className="one" />
          <Line className="two" />
        </Circle>
      </ExitContainer>
    <OurStoryContainer
      initial={{ x: '-100%' }}
      animate={isOpen ? { x: 0 } : { x: '-100%' }}
      transition={{ type: 'spring', stiffness: 100 }}
    >

      {storyData.map((item, index) => (
        <StorySection key={index}>

          <ImageWrapper>
          <StoryImage 
          src={`https://sunnyisland.s3.us-east-2.amazonaws.com/media/images/story/story${index + 1}.png`}
          alt={`Story ${index + 1}`}
        />
  </ImageWrapper>
          <TextColumn>
            <StoryTopline>{item.topline}</StoryTopline>
            <StoryHeader>{item.header}</StoryHeader>
            <StoryDescription>{item.description}</StoryDescription>
            {item.bullets.length > 0 && (
              <BulletList>
                {item.bullets.map((bullet, idx) => (
                  <BulletPoint key={idx}>{bullet}</BulletPoint>
                ))}
              </BulletList>
            )}
          </TextColumn>
        </StorySection>
      ))}
    </OurStoryContainer>
    </OurStoryContainerWrapper>
  );
}
