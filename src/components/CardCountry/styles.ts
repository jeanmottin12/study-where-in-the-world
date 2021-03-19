import styled from 'styled-components';

interface CardProps {
  theme: boolean;
}

export const Container = styled.li<CardProps>`
  background: ${props => props.theme === true ? 'var(--dark-blue)' : 'var(--white)'};
  color: ${props => props.theme === true ? 'var(--white)' : 'var(--light-mode-text)'};
  border-radius: 5px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.08);

  transition: background .2s, color .2s;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  a {
    display: flex;
    flex-direction: column;
    height: 100%;

    & > div {
      padding: 20px 25px;
    }
  }


  h3 {
    margin-bottom: 1rem
  }

  p {
    font-size: 0.9rem;
    margin-bottom: .3rem;

    strong {
      font-weight: 600;
    }
  }
`;
