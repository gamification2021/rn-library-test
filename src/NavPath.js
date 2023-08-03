import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import FullScreenTest from './FullScreenTest';
import SecondScreenTest from './SecondScreenTest';
import SpinAndWinScreen from './SpinAndWinScreen';
import ApiScreen from './ApiScreen';
import AppContext from './context';

const Stack = createStackNavigator();
const NavPath = (props) => {
    const [callBack, setCallBack] = useState(undefined);
    const [gift, setGift] = useState('');
    const appContext = useContext(AppContext);
    if (callBack == true) {
        props.callBack && props.callBack(gift);
        setCallBack(false)
    }
    return (
        <AppContext.Provider value={{ callBack: [callBack, setCallBack], gift: [gift, setGift] }}>
            <Stack.Navigator>
                <Stack.Screen name="spinScreen" component={SpinAndWinScreen} options={{ headerShown: false }} />
                <Stack.Screen name="first" component={FullScreenTest} options={{ headerShown: false }} />
                <Stack.Screen name="second" component={SecondScreenTest} options={{ headerShown: false }} />
                <Stack.Screen name="jokes" component={ApiScreen} options={{ headerShown: false }} />

            </Stack.Navigator>
        </AppContext.Provider>

    )
}

export default NavPath

const styles = StyleSheet.create({})