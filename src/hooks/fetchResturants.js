import {useState, useEffect} from 'react';
import yelpApi from '../api/yelpApi'


export default  () => {
    const [restaurants, setRestaurants] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    
    const fetchApi = async (searchTerm) =>{
        try{
            const response = await yelpApi.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'Jersey City'
                }
            })
            // console.log(response.data.businesses)
            setRestaurants(response.data.businesses)
        } catch(error) {
            setErrorMessage('Something went Wrong!!!')
        }
    }
    useEffect(() => {
        fetchApi('pasta')
    },[])

    return [fetchApi, restaurants, errorMessage]
}

