import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const FullScreenTest = (props) => {
    return (
        <View style={{ alignItems: 'center', backgroundColor: 'red', flex: 1, justifyContent: 'center', width: '100%' }}>
            <TouchableOpacity
                onPress={() => {
                    props.navigation.navigate("second")
                }}
            >
                <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>FullScreenTest</Text>

            </TouchableOpacity>
            <Text>this is first screen loaded from the library</Text>
        </View>
    )
}

export default FullScreenTest

const styles = StyleSheet.create({})