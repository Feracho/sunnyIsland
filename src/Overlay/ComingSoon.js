import React from 'react';
import { Circle, ExitContainer, Line } from '../GlobalStyles/GlobalElements';
import { ComingSoonContainer } from './OverlayElements';
const comingSoonVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } }
};

const ComingSoonPopup = ({ isOpen, onClose }) => {
  return (
    <ComingSoonContainer
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={comingSoonVariants}
    >
      <ExitContainer className='close-btn' onClick={onClose}>
        <Circle>
          <Line className="one" />
          <Line className="two" />
        </Circle>
      </ExitContainer>
      Coming Soon!
    </ComingSoonContainer>
  );
};

export default ComingSoonPopup;
