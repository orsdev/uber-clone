import React from 'react';
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';

import Navigation from './navigation/Navigation';
import { KeyboardAvoidingView, Platform } from 'react-native';

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            // keyboardVerticalOffset={80}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
          >
            <Navigation />
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </ThemeProvider>
    </Provider>
  );
}
