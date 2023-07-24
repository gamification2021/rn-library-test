import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import FullScreenTest from './FullScreenTest';
import SecondScreenTest from './SecondScreenTest';
import SpinAndWinScreen from './SpinAndWinScreen';

const Stack = createStackNavigator();
const NavPath = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="spinScreen" component={SpinAndWinScreen} options={{ headerShown: false }} />
            <Stack.Screen name="first" component={FullScreenTest} options={{ headerShown: false }} />
            <Stack.Screen name="second" component={SecondScreenTest} options={{ headerShown: false }} />

        </Stack.Navigator>
    )
}

export default NavPath

const styles = StyleSheet.create({})