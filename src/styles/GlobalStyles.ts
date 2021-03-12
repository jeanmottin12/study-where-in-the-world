import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #fff;
    --dark-blue: #2b3945;
    --dark-mode-bg: #202c37;

    --light-mode-text: #111517;
    --dark-grey: #858585;
    --light-mode-bg: #fafafa;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    color: var(--light-mode-text);
    background: var(--light-mode-bg);
  }

  body, input, button {
    font: 400 1rem "Nunito Sans", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
