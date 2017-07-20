import React from 'react';
import { AppRegistry } from 'react-native';
import { Sentry } from 'react-native-sentry';
import NavigationContainer from './src/NavigationContainer';

Sentry.config('https://95533180da2f42d6963bbe9af30746cc:7cc8bf623b7744dfa64b496616f57223@sentry.io/192723').install();


export default function ReactNativeSample() {
  return (
    <NavigationContainer />
  );
}

AppRegistry.registerComponent('ReactNativeSample', () => ReactNativeSample);
