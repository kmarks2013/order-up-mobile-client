import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const RestaurantDetail = ({restaurant}) => {
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

export default RestaurantDetail

const styles = StyleSheet.create({
    image: {
        width:250,
        height: 120,
        borderRadius: 4
    },
    name: {}
})
