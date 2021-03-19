import styled from 'styled-components';

interface HomeProps {
  theme: boolean;
}

export const Container = styled.section<HomeProps>`
  background: ${props => props.theme === true ? 'var(--dark-mode-bg)' : 'var(--light-mode-bg)'};
  color: ${props => props.theme === true ? 'var(--white)' : 'var(--light-mode-text)'};
  padding-bottom: 100px;
  min-height: calc(100vh - 80px);

  transition: background .2s, color .2s;

  & > div {
    max-width: 1440px;
    width: 100%;
    padding: 0 20px;
    margin: 0 auto;
  }

  .not-found {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 4rem;

    h3 {
      font-size: 2rem;
    }
  }
`;

export const Filters = styled.div<HomeProps>`
  padding: 50px 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  form {
    background: ${props => props.theme === true ? 'var(--dark-blue)' : 'var(--white)'};
    color: ${props => props.theme === true ? 'var(--white)' : 'var(--light-mode-text)'};
    display: flex;
    align-items: center;
    margin-right: 30px;

    transition: background .2s, color .2s;

    border-radius: 5px;
    padding: 15px 25px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.08);

    width: 100%;
    max-width: 500px;
    height: 60px;

    input {
      background: ${props => props.theme === true ? 'var(--dark-blue)' : 'var(--white)'};
      color: ${props => props.theme === true ? 'var(--white)' : 'var(--light-mode-text)'};
      width: 100%;
      border: 0;
      outline: none;
      flex: 1;

      transition: background .2s, color .2s;
    }

    svg {
      color: ${props => props.theme === true ? 'var(--white)' : 'var(--dark-grey)'};
      margin-right: 20px;

      transition: background .2s, color .2s;
    }

    button {
      border: 0;
      padding: 0;
      display: flex;
      background: transparent;

      svg {
        margin: 0;
        transition: color .2s;
      }

      &:hover svg {
        color: var(--dark-blue);
      }
    }
  }

  .react-select {
    width: 100%;
    max-width: 250px;

    & > div {
      min-height: 60px;
      box-shadow: 0 0 30px rgb(0 0 0 / 8%);
      border: 0;
      background: ${props => props.theme === true ? 'var(--dark-blue)' : 'var(--white)'};
      color: ${props => props.theme === true ? 'var(--white)' : 'var(--light-mode-text)'};

      & > div > span {
        display: none;
      }
    }
  }

  select {
    margin-left: 20px;
    background: var(--white);
    border-radius: 5px;
    padding: 15px 25px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.08);

    width: 100%;
    max-width: 200px;
    height: 60px;
    border: 0;
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;

    form {
      margin-right: 0;
    }

    .react-select {
      max-width: 100%;
      margin-left: 0;
      margin-top: 40px;
    }
  }
`;

export const CardGrid = styled.ul`
  list-style: none;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 60px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }

  @media (max-width: 767px) {
    gap: 20px;
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;
