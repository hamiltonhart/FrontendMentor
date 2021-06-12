import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
  
  :root {
    --mainBackground: hsl(233, 47%, 7%);
    --cardBackground: hsl(244, 38%, 16%);
    --accent: hsl(277, 64%, 61%);
    --white: hsl(0, 0%, 100%);
    --mainParagraph: hsla(0, 0%, 100%, 0.75);
    --statHeading: hsla(0, 0%, 100%, 0.6);

    --cardBorderRadius: 1rem;
    font-size: 10px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }
  }

  *, *::before, *::after  {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
    &:hover{
      text-decoration: none;
      color: inherit;
    }
  }

  ul {
    list-style: none;
  }
  
`;
