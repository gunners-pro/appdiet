import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans';

import { Loading } from '@components/Loading';

import { ToggleThemeProvider } from '@context/ToggleTheme';

import { Home } from '@screens/Home';
import { Register } from '@screens/Register';

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

  return (
    <ToggleThemeProvider>
      {!fontsLoaded ? <Loading /> : <Register />}
    </ToggleThemeProvider>
  );
}
