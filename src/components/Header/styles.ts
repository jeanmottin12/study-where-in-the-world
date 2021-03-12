import styled from 'styled-components';

export const Container = styled.header`
  height: 80px;
  box-shadow: 0 0 30px rgba(0,0,0,.08);

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

  span {
    font-weight: 600;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 1.2rem;
    }
  }
`;
