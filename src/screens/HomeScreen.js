import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'

const HomeScreen = () => {
    const [term, setTerm] = useState('')
    const [results, setResuts] = useState([])

    const searchApi = () => {
       const response = await yelp.get('/search',{
           params: {
               limit:50,
               term: term
           }
           //params adds the string paramaters listed in the documentation
       })
       setResutls(response.data.businesses)
    }
    const onTermChange = (newTerm) => {
        setTerm(newTerm)
    }

    const onTermSubmit = () => {
        console.log('submitted', term)
    }

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={onTermChange}
                onTermSubmit={onTermSubmit}
            />
            <Text style={styles.homeFont}>Test</Text>
            <Text>We have found {results.length} resturants</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    homeFont: {
        fontSize: 45
    }
})

export default HomeScreen
