import { Switch } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Logo } from '@components/Logo';

import { useToggleTheme } from '@context/ToggleTheme';

import { Container } from './styles';

export function Header() {
  const { toggleTheme, theme } = useToggleTheme();
  const { COLORS } = useTheme();

  return (
    <Container>
      <Logo />
      <Switch
        trackColor={{ false: COLORS.GRAY_400, true: COLORS.GREEN_DARK }}
        thumbColor={theme ? COLORS.GREEN_LIGHT : '#fff'}
        onValueChange={toggleTheme}
        value={theme === 'dark'}
      />
    </Container>
  );
}
