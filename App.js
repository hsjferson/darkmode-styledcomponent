import React from 'react';
import { View, Text } from 'react-native';
import { useColorScheme} from 'react-native';

import themes from './src/themes';
import { ThemeProvider} from 'styled-components';
import Home from './src/Home/Index';


export default function App() {

 const deviceTheme = useColorScheme();
 const theme = themes [deviceTheme] || theme.dark;

 return (
   <ThemeProvider theme= {theme}>
      <Home/>
   </ThemeProvider>
    
  );
}