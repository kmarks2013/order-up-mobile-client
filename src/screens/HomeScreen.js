import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const HomeScreen = () => {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults()

    const onTermChange = (newTerm) => {
        setTerm(newTerm)
    }

    const onTermSubmit = () => {
        searchApi(term)
    }

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={onTermChange}
                onTermSubmit={onTermSubmit}
            />
            <Text style={styles.homeFont}>Test</Text>
            {errorMessage ? <Text>{errorMessage}</Text>: null}
            <Text>We have found {results.length} resturants</Text>
            <ResultsList />
            <ResultsList />
            <ResultsList />
        </View>
    )
}

const styles = StyleSheet.create({
    homeFont: {
        fontSize: 45
    }
})

export default HomeScreen
