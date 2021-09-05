import React from 'react';
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';

import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <SafeAreaProvider>
          <HomeScreen />
        </SafeAreaProvider>
      </ThemeProvider>
    </Provider>
  );
}
