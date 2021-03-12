import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1440px;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;

  button {
    background: var(--white);
    border-radius: 5px;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.2);
    width: 150px;
    height: 45px;
    border: 0;

    margin-top: 50px;
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
      background: var(--dark-blue);
      color: var(--white);
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

      span {
        min-width: 100px;
        height: 30px;

        display: flex;
        align-items: center;
        justify-content: center;
        font-size: .85rem;

        background: var(--white);
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

        margin-right: 10px;
        margin-bottom: 10px;
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
