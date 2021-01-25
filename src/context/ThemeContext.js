import React from 'react';

export const ThemeContext = React.createContext(null);
// export const ThemeContext = React.createContext({});

// export const ThemeContextProvider = ({ children }) => {
//   const [theme, setTheme] = useState(false);
//   return (
//     <ThemeContentProvider value={{ theme, setTheme }}>
//       {children}
//     </ThemeContentProvider>
//   );
// };
