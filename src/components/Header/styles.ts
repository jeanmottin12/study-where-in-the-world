import styled from 'styled-components';

interface HeaderProps {
  theme: boolean;
}

export const Container = styled.header<HeaderProps>`
  height: 80px;
  box-shadow: 0 0 30px rgba(0,0,0,.08);

  background: ${props => props.theme === true ? 'var(--dark-blue)' : 'var(--white)'};
  color: ${props => props.theme === true ? 'var(--white)' : 'var(--light-mode-text)'};

  transition: background .2s, color .2s;

  & > div {
    max-width: 1440px;
    width: 100%;
    height: 100%;
    padding: 0 20px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h1 {
    font-size: 1.9rem;
  }

  button {
    border: 0;
    outline: 0;
    background: transparent;
    font-weight: 600;
    color: inherit;

    display: flex;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 1.2rem;
    }
  }
`;
