import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components/native';

import { DARK } from '@theme/dark';
import { LIGHT } from '@theme/light';

enum Theme {
  light = 'light',
  dark = 'dark',
}

type ContextType = {
  toggleTheme: () => void;
  theme: Theme;
};

type Props = {
  children: React.ReactNode;
};

const themes = {
  light: LIGHT,
  dark: DARK,
};

const ToggleThemeContext = createContext({} as ContextType);

export function ToggleThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState(Theme.light);

  function toggleTheme() {
    if (theme === Theme.light) {
      setTheme(Theme.dark);
    } else {
      setTheme(Theme.light);
    }
  }

  return (
    <ToggleThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>
    </ToggleThemeContext.Provider>
  );
}

export function useToggleTheme() {
  const context = useContext(ToggleThemeContext);

  return context;
}
