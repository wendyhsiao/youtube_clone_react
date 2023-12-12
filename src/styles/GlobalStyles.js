import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    margin: 0;
    font-family: 'Roboto', 'Arial', 'sans-serif';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-size: 0.75rem;
    line-height: 1rem;
  }

  @media (min-width: 768px){
    body {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }

  blockquote,
  dl,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  figure,
  p,
  pre {
    margin: 0;
  }

  ol,
  ul,
  menu {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }
`;
