import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Link } from 'react-router-dom';

import { FiMoon, FiSun } from "react-icons/fi";

import { Container } from './styles';

export function Header() {
  const { themeDark, switchTheme } = useContext(ThemeContext);

  return (
    <Container theme={themeDark}>
      <div>
        <Link to="/">
          <h1>Where in the world?</h1>
        </Link>

        <button onClick={switchTheme}>
          {themeDark ? <FiMoon size={24} /> : <FiSun size={24} />}
          {themeDark ? <span>Dark Mode</span> : <span>Light Mode</span>}
        </button>
      </div>
    </Container>
  )
}
