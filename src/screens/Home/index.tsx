import { Switch } from 'react-native';
import { useTheme } from 'styled-components/native';

import { useToggleTheme } from '@context/ToggleTheme';

import { Container, Title } from './styles';

export function Home() {
  const { toggleTheme, theme } = useToggleTheme();
  const { COLORS } = useTheme();

  return (
    <Container>
      <Switch
        trackColor={{ false: COLORS.GRAY_400, true: COLORS.GREEN_DARK }}
        thumbColor={theme ? COLORS.GREEN_LIGHT : '#fff'}
        onValueChange={toggleTheme}
        value={theme === 'dark'}
      />
      <Title>Home</Title>
    </Container>
  );
}
