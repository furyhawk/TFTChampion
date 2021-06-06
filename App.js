import React from 'react';
import { Provider as StateProvider } from 'react-redux'

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { red, purple } from '@material-ui/core/colors';

import store from './src/redux/store'
import MainStackNavigator from './src/navigation/AppNavigator';

const primary = red[500]; // #F44336
const accent = purple['A200']; // #E040FB

const theme = createMuiTheme({
  palette: {
    // primary: primary,
    // secondary: accent
  }
});

export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <StateProvider store={store}>
        <MainStackNavigator />
      </StateProvider>
    </MuiThemeProvider>


  )
}


