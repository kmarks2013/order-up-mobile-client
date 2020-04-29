import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const HomeScreen = () => {
    return (
        <View>
            <Text style={styles.homeFont}>Test</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    homeFont: {
        fontSize: 45
    }
})

export default HomeScreen
