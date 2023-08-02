import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import NavPath from './NavPath'
import AppContext from './context'

const TestNav = () => {
    const [callBack, setCallBack] = useState(undefined)
    return (
        <AppContext.Provider value={{ callBack, setCallBack }}>
            <NavigationContainer>
                <NavPath ggg={() => console.log('hai calling the callback')} />
            </NavigationContainer>
        </AppContext.Provider>
    )
}

export default TestNav

const styles = StyleSheet.create({})