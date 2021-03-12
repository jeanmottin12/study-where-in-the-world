import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 2rem;
  padding: 20px;

  svg {
    color: var(--blue-dark);
    animation: rotate 1s linear infinite;
  }

  span {
    margin-top: 16px;
    font-size: 2rem;
    font-weight: 600;
  }

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }
`;
