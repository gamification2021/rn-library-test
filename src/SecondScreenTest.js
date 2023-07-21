import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SecondScreenTest = () => {
    return (
        <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center', width: '100%' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>SecondScreenTest</Text>
            <Text>Navigated to second screen in sdk</Text>
        </View>
    )
}

export default SecondScreenTest

const styles = StyleSheet.create({})