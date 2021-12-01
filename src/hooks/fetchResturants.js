import {useState, useEffect} from 'react';
import api from '../services/api'

export default () =>{
    const [restaurants, setRestaurants] = useState([])
    const [errorMessage, setErrorMessage] =useState('')

    const fetchApi = async (searchTerm) => {
        try {
            const response = await api.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'Jersey City'
                }
            })
            // console.log(response.data.businesses)
            setRestaurants(response.data.businesses)
        }catch(error){
            setErrorMessage('Something Went Wrong!!')
        }
    }
    useEffect(() => {
        fetchApi('Pasta')
    },[])

    return [fetchApi, restaurants, errorMessage]
}

