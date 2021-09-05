import React from 'react';
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';

import Navigation from './navigation/Navigation';

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </ThemeProvider>
    </Provider>
  );
}
