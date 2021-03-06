import {useEffect, useState} from "react"
import  yelp from '../api/yelp'

export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async (searchTerm) => {
        console.log("hi there")
        try {
            const response = await yelp.get('/search',{
                params: {
                    limit:50,
                    term: searchTerm,
                    location: 'new york'
                }
            })
            setResults(response.data.businesses)
        } catch (err) {
            setErrorMessage('Oops! Something went wrong!')
            console.log(err)
        }
    }

    //BAD CODE Call search api when component is first rendered.
    // searchApi('pasta')
    //the above line an infinite loop^
    useEffect(()=> {
        searchApi('pasta')
    }, [])

    return [searchApi, results, errorMessage]
} 