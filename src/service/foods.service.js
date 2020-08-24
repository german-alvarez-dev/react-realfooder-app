import axios from 'axios'

export default class FoodsService {
    constructor() {
        this.service = axios.create({
            baseURL: 'https://reactr-realfooder.herokuapp.com/api/foods',
            withCredentials: true
        })
    }

    getAllFoods = () => this.service.get('/getAllFoods')
    
}