import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1440px;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  padding-bottom: 100px;
`;

export const Filters = styled.div`
  padding: 50px 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  form {
    display: flex;
    align-items: center;

    background: var(--white);
    border-radius: 5px;
    padding: 15px 25px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.08);

    width: 100%;
    max-width: 500px;
    height: 60px;

    input {
      width: 100%;
      border: 0;
      outline: none;
    }

    svg {
      color: var(--dark-grey);
      margin-right: 20px;
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

    select {
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
