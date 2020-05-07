import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const SearchBar = () => {
    return (
        <View style={styles.background}>
            <AntDesign name="search1" size={30} color="black" />
            <Text></Text>
        </View>
    )
}

const styles= StyleSheet.create({
    background: {
        backgroundColor: '#B2B2B2',
        // backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15
    }
})

export default SearchBar
