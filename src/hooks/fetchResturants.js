import {useState, useEffect} from 'react';
import api from '../services/api'

export default () =>{
    const [restaurants, setRestaurants] = useState([])
    cosnt [errorMessage, setErrorMessage] =useState('')

    const fetchApi = async (restaurant) => {
        try {
            const response = await api.get('/search', {
                params: {
                    limit: 50,
                    term: restaurant,
                    location: 'Jersey City'
                }
            })
            console.log(response.data.businesses)
            setRestaurants(response.data.businesses)
        }catch(error){
            setErrorMessage('Something Went Wrong!!')
        }
    }
    useEffect(() => {
        fetchApi('pasta')
    },[])

    return [fetchApi, restaurants, errorMessage]
}

