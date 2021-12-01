import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer allEBgz8Gq24kFgef-uAc23ZQ3eQJCEUvcwN2eTuDwPyPN6BuEh-ZFhGjOGRjeI-cW8TZwqhE9uMpe-zbiY4x-eoNMFtbj6QfY4aHHBchILbDhL1GjqkiUXEtmKlYXYx'
    }
})

