import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FullScreenTest = () => {
    return (
        <View style={{ alignItems: 'center', backgroundColor: 'red', flex: 1, justifyContent: 'center', width: '100%' }}>
            <Text style={{ color: 'yellow', fontSize: 30, fontWeight: 'bold' }}>FullScreenTest</Text>
        </View>
    )
}

export default FullScreenTest

const styles = StyleSheet.create({})