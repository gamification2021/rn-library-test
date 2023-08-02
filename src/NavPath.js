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
    const [callBack, setCallBack] = useState(undefined)
    const appContext = useContext(AppContext);
    console.log(callBack);
    if (callBack == true) {
        console.log("TRUEEE");
        props.callBack();
        setCallBack(false)
    }
    return (
        <AppContext.Provider value={{ callBack, setCallBack }}>
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