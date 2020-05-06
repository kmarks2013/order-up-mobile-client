import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'

const HomeScreen = () => {
    return (
        <View>
            <SearchBar/>
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
