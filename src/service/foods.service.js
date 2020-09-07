import axios from 'axios'

export default class FoodsService {
    constructor() {
        this.service = axios.create({
            baseURL: 'https://reactr-realfooder.herokuapp.com/api',
            withCredentials: true
        })
    }

    getAllFoods = () => this.service.get('/foods')
    getOneFood = _id => this.service.get(`/foods/details/${_id}`)
    createFood = food => this.service.post('/foods/newFood', food)    
}