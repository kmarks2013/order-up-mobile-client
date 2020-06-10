import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import yelp from '../api/yelp'

const RestaurantScreen = ({navigation}) => {
    const [restaruant, setRestaurant] = useState(null)
    const id = navigation.getParam('id')

    // console.log(id)
    console.log(restaruant)

    const getRestaurant = async (id) => {
        const response = await yelp.get(`/${id}`)
        setRestaurant(response.data)
    }

    useEffect(() => {
        getRestaurant(id)
    }, [])


    return (
        <View>
            <Text> Restaruant show screen</Text>
        </View>
    )
}

export default RestaurantScreen

const styles = StyleSheet.create({})
