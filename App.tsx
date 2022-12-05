import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans';

import { ToggleThemeProvider } from '@context/ToggleTheme';

import { Home } from '@screens/Home';

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ToggleThemeProvider>
      <Home />
    </ToggleThemeProvider>
  );
}
