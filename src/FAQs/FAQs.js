import React, { useState } from 'react';
import { Circle, ExitContainer, Line } from '../GlobalStyles/GlobalElements';
import faqData from './Data';
import {
  AccordionContainer,
  AccordionContent,
  AccordionTitle,
  AccordionWrapper,
  Button,
  Container,
  FAQContainer
} from './FAQsElements';
const FAQ = ({ isDarkMode, setShowFAQ, showFAQ, onClose }) => {
  const [expandedItem, setExpandedItem] = useState(null);
  // Change to use null when no item is hovered, or the unique identifier of the hovered item
  const [hoveredItem, setHoveredItem] = useState(null);

  const toggleAccordion = (itemId) => {
    setExpandedItem((prevItem) => (prevItem === itemId ? null : itemId));
  };

  return (
    <FAQContainer
      isDarkMode={isDarkMode}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
         <ExitContainer className='close-btn'  onClick={onClose}>
      <Circle>
          <Line className="one" />
          <Line className="two" />
        </Circle>
      </ExitContainer>

      <Container isDarkMode={isDarkMode}>
        <h2>Frequently Asked Questions</h2>
        <AccordionContainer isDarkMode={isDarkMode}>
          {faqData.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h3>{section.header}</h3>
              {section.questions.map((question, questionIndex) => {
                const itemId = `accordion-${sectionIndex}-${questionIndex}`;
                return (
                  <AccordionWrapper isDarkMode={isDarkMode} key={itemId}>
                    <Button
                      onMouseEnter={() => setHoveredItem(itemId)}
                      onMouseLeave={() => setHoveredItem(null)}
                      onFocus={() => setHoveredItem(itemId)}
                      onBlur={() => setHoveredItem(null)}
                      isDarkMode={isDarkMode}
                      expanded={expandedItem === itemId}
                      aria-expanded={expandedItem === itemId}
                      onClick={() => toggleAccordion(itemId)}
                    >
                      {/* Pass hover as true if hoveredItem matches this item's ID */}
                      <AccordionTitle hover={hoveredItem === itemId}>{question.question}</AccordionTitle>
                    </Button>
                    <AccordionContent  isDarkMode={isDarkMode } expanded={expandedItem === `accordion-${sectionIndex}-${questionIndex}`}>
                    <p>{question.answer}</p>
                    {question.bullets && question.bullets.map((bullet, bulletIndex) => (
                      <li key={`bullet-${bulletIndex}`}>{bullet}</li>
                    ))}
                  </AccordionContent>
                  </AccordionWrapper>
                );
              })}
            </div>
          ))}
        </AccordionContainer>
      </Container>
    </FAQContainer>
  );
};

export default FAQ;