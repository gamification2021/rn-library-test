import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FullScreenTest from './src/FullScreenTest';
import TestNav from './src/TestNav';

import { AppRegistry } from 'react-native';
import NavPath from './src/NavPath';
import { NavigationContainer } from '@react-navigation/native';
AppRegistry.registerComponent('main', () => App);

export default function App() {
  return (
    <NavigationContainer>
      <NavPath callBack={() => { console.log('hai calling the callback'); }} />
    </NavigationContainer>

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
