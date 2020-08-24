import axios from 'axios'

export default class CountryService {
    constructor() {
        this.service = axios.create({
            baseURL: 'https://reactr-realfooder.herokuapp.com/api/countries',
            //withCredentials: true
        })
    }

    getAllCountries = () => this.service.get('/getAllCountries')
    
}