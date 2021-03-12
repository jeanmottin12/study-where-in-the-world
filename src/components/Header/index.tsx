import { Link } from 'react-router-dom';
import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <div>
        <Link to="/">
          <h1>Where in the world?</h1>
        </Link>

        <span>Dark Mode</span>
      </div>
    </Container>
  )
}
