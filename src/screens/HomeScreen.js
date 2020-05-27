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

    console.log(results)

    const filterResultsByPrice = (price) => {
        // price === "$" || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price
        })
     }

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={onTermChange}
                onTermSubmit={onTermSubmit}
            />
            {/* <Text style={styles.homeFont}>Test</Text> */}
            {errorMessage ? <Text>{errorMessage}</Text>: null}
            <Text>We have found {results.length} resturants</Text>
            <ResultsList results={filterResultsByPrice('$')} title='Cost Effective'/>
            <ResultsList results={filterResultsByPrice('$$')} title='Bit Pricier'/>
            <ResultsList results={filterResultsByPrice('$$$')} title='Big Spender'/>

        </View>
    )
}

const styles = StyleSheet.create({
    homeFont: {
        fontSize: 45
    }
})

export default HomeScreen
