import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'

const HomeScreen = () => {

    const [term, setTerm] = useState('')

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
