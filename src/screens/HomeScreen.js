import React, {useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'

const HomeScreen = () => {
    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async (searchTerm) => {
        console.log("hi there")
        try {
            const response = await yelp.get('/search',{
                params: {
                    limit:50,
                    term: searchTerm,
                    location: 'san jose'
                }
            })
            setResults(response.data.businesses)
        } catch (err) {
            setErrorMessage('Oops! Something went wrong!')
            console.log(err)
        }
    }

    const onTermChange = (newTerm) => {
        setTerm(newTerm)
    }

    const onTermSubmit = () => {
        searchApi(term)
    }

    //BAD CODE Call search api when component is first rendered.
    // searchApi('pasta')
    //causes an infinite loops

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={onTermChange}
                onTermSubmit={onTermSubmit}
            />
            <Text style={styles.homeFont}>Test</Text>
            {errorMessage.length ? <Text>{errorMessage}</Text>: null}
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
