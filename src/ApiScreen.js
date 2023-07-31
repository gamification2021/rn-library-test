import { RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ApiClient from './ApiClient';

const ApiScreen = () => {
    const [data, setData] = useState(null);
    const [refreshing, setRefreshing] = useState(false);
    useEffect(() => {
        (async () => {
            loadJoke();
        })();
    }, []);

    const loadJoke = async () => {
        setRefreshing(true)
        const response = await ApiClient.get();
        setData(response.data)
        setRefreshing(false)

    }
    return (
        <ScrollView style={{ marginTop: 30 }} contentContainerStyle={{ alignItems: 'center', flex: 1, justifyContent: 'center', padding: 20 }}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={loadJoke} />}
        >

            <Text style={{ color: 'red', fontSize: 20, textAlign: 'center' }}>{data && data.setup}</Text>
            <Text style={{ color: 'green', fontSize: 18, marginTop: 50, textAlign: 'center' }}>{data && data.delivery}</Text>
            <Text style={{ bottom: 10, fontSize: 8, position: 'absolute' }}>swipe down to load new jokes</Text>
        </ScrollView>
    )
}

export default ApiScreen

const styles = StyleSheet.create({})