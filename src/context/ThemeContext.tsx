import { createContext, ReactNode, useState } from 'react';

interface ThemeProviderProps {
  children: ReactNode;
}

interface ThemeContextData {
  themeDark: boolean;
  switchTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [themeDark, setThemeDark] = useState(false);

  function switchTheme() {
    setThemeDark(!themeDark);
  }

  return (
    <ThemeContext.Provider
      value={{
        themeDark,
        switchTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
