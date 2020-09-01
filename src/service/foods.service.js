import axios from 'axios'

export default class FoodsService {
    constructor() {
        this.service = axios.create({
            baseURL: 'https://reactr-realfooder.herokuapp.com/api',
            withCredentials: true
        })
    }

    getAllFoods = () => this.service.get('/foods')
    
}