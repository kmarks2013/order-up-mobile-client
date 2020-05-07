import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const SearchBar = () => {
    return (
        <View style={styles.backgroundStyle}>
            <AntDesign name="search1" size={30} color="black" />
            <TextInput />
        </View>
    )
}

const styles= StyleSheet.create({
    backgroundStyle: {
        // backgroundColor: '#B2B2B2',
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15
    }
})

export default SearchBar
