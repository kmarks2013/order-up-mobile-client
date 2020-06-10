import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import ResturantDetail from './ResturantDetail'


const ResultsList = ({title, results}) => {
    return (
        <View>
            <Text style={styles.titleStyle}>{title}</Text>
            {/* <Text> Results: {results.length}</Text> */}
            <FlatList
                horizontal
                data={results}
                keyExtractor={(result) => result.id }
                renderItem={({item}) => {
                    return <ResturantDetail  restaurant={item} />
                }}
            />
        </View>
    )
}

export default ResultsList

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: "bold"
    }
})
