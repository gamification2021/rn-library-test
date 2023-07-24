import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FullScreenTest from './src/FullScreenTest';
import TestNav from './src/TestNav';

import { AppRegistry } from 'react-native';
AppRegistry.registerComponent('main',() => App);

export default function App() {
  return (

    <TestNav />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
