import styled, { createGlobalStyle } from 'styled-components';
const fontFaces = `
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
  }
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400&display=swap');
  }
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap');
  }
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');
  }
`;


export const GlobalStyle = createGlobalStyle`
  ${fontFaces}

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    font-family: 'Open Sans', sans-serif;
  }

  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap');

  html {
    font-family: 'Open Sans', sans-serif;
  }

  * {
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;

    font-family: 'Open Sans', sans-serif;
    user-select: none;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  canvas {
    opacity: 0;
    touch-action: none;
    animation: fade-in 5s ease 1s forwards;
    position: fixed;
  }
`;

export const LandingPageWrap = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;
