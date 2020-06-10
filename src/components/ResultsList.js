import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import RestaurantDetail from './RestaurantDetail'
import {withNavigation} from 'react-navigation'


const ResultsList = ({title, results, navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            {/* <Text> Results: {results.length}</Text> */}
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id }
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Restaurant", {id: item.id})}
                        >
                            <RestaurantDetail restaurant={item} />
                        </TouchableOpacity>

                    )
                }}
            />
        </View>
    )
}

export default ResultsList

const styles = StyleSheet.create({
    container:{
        marginBottom: 10
    },
    titleStyle: {
        marginLeft: 15,
        marginBottom: 5,
        fontSize: 18,
        fontWeight: "bold"
    }
})
