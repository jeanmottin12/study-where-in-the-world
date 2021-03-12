import { RiLoader5Line } from 'react-icons/ri';

import { Container } from './styles';

export function Loader() {
  return (
    <Container>
      <RiLoader5Line size={60} />
      <span>Loading...</span>
    </Container>
  );
}
