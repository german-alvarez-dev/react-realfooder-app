import axios from 'axios'

export default class CountryService {
    constructor() {
        this.service = axios.create({
            baseURL: 'https://reactr-realfooder.herokuapp.com/api',
            withCredentials: true
        })
    }

    getAllCountries = () => this.service.get('/countries')
    
}