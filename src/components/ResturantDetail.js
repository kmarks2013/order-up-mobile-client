import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const ResturantDetail = ({restaurant}) => {
    return (
        <View>
            <Image
            source={{uri: restaurant.image_url}}
            style={styles.image}
            />
            <Text> {restaurant.name} </Text>
        </View>
    )
}

export default ResturantDetail

const styles = StyleSheet.create({})
