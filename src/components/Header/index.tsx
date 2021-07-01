import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
import { Container } from './style';
import Switch from 'react-switch';

interface Props {
  toggleTheme: () => void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title: themeTitle } = useContext(ThemeContext);

  return (
    <Container>
      Hello, World!
      <Switch
        onChange={toggleTheme}
        checked={themeTitle === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        onColor={shade(0.15, colors.secundary)}
        offColor={shade(0.15, colors.primary)}
      >
      </Switch>
    </Container>
  );
};

export default Header;
