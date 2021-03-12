import styled from 'styled-components';

export const Container = styled.li`
  background: var(--white);
  border-radius: 5px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.08);

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
