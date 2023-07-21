import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import NavPath from './NavPath'

const TestNav = () => {
    return (
        <NavigationContainer>
            <NavPath />
        </NavigationContainer>
    )
}

export default TestNav

const styles = StyleSheet.create({})