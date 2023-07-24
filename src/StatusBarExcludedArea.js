import React from 'react'
import { SafeAreaView, StyleSheet, StatusBar, Platform, } from 'react-native'

const StatusBarExcludedArea = (props) => {
    return (
        <SafeAreaView style={{ ...styles.safe, ...props.style }}>
            {props.children}
        </SafeAreaView>
    )
}

export default StatusBarExcludedArea

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        // marginTop: Platform.OS === "android" ? 0 : 0,
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
})
