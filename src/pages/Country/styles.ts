import styled from 'styled-components';

interface CountryProps {
  theme: boolean;
}

export const Container = styled.section<CountryProps>`
  background: ${props => props.theme === true ? 'var(--dark-mode-bg)' : 'var(--light-mode-bg)'};
  color: ${props => props.theme === true ? 'var(--white)' : 'var(--light-mode-text)'};
  min-height: calc(100vh - 80px);

  transition: background .2s, color .2s;

  padding-top: 50px;

  & > div {
    max-width: 1440px;
    width: 100%;
    padding: 0 20px;
    margin: 0 auto;
  }

  button {
    background: ${props => props.theme === true ? 'var(--dark-blue)' : 'var(--white)'};
    color: ${props => props.theme === true ? 'var(--white)' : 'var(--light-mode-text)'};
    border-radius: 5px;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.2);
    width: 150px;
    height: 45px;
    border: 0;

    margin-bottom: 60px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 600;

    svg {
      margin-right: 10px;
    }

    transition: background .2s, color .2s;

    &:hover {
      background: ${props => props.theme === true ? 'var(--white)' : 'var(--dark-blue)'};
      color: ${props => props.theme === true ? 'var(--light-mode-text)' : 'var(--white)'};
    }
  }

  .country-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 45%;
      height: 100%;
      object-fit: cover;
    }

    & > div {
      width: 45%;
    }

    h2 {
      font-size: 1.8rem;
      margin-bottom: 2rem;
    }

    ul {
      list-style: none;
      margin-bottom: 5rem;

      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;

      li {
        strong {
          font-weight: 600;
        }
      }
    }

    .border-countries {
      display: flex;
      flex-wrap: wrap;

      p {
        font-weight: 600;
        margin-right: 15px;
      }

      a {
        min-width: 100px;
        height: 30px;

        display: flex;
        align-items: center;
        justify-content: center;
        font-size: .85rem;

        background: ${props => props.theme === true ? 'var(--dark-blue)' : 'var(--white)'};
        color: ${props => props.theme === true ? 'var(--white)' : 'var(--light-mode-text)'};

        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

        margin-right: 10px;
        margin-bottom: 10px;

        transition: background .2s, color .2s;

        &:hover {
          background: ${props => props.theme === true ? 'var(--white)' : 'var(--dark-blue)'};
          color: ${props => props.theme === true ? 'var(--light-mode-text)' : 'var(--white)'};
        }
      }
    }
  }

  @media (max-width: 767px) {
    button {
      margin-top: 30px;
      margin-bottom: 30px;
    }

    .country-wrapper {
      flex-direction: column;
      margin-bottom: 100px;

      img {
        width: 100%;
        margin-bottom: 30px;
      }

      & > div {
        width: 100%;
      }
    }
  }
`;
