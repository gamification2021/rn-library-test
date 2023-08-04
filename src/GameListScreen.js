import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native'

const GameListScreen = (props) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title='spin and win' onPress={() => props.navigation.navigate('spinScreen')} />
        </View>
    )
}

export default GameListScreen

const styles = StyleSheet.create({})