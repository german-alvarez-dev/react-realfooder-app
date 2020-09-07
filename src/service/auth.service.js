import axios from 'axios'

export default class services {
    constructor() {
        this.service = axios.create({
            baseURL: 'https://reactr-realfooder.herokuapp.com/api/auth',
            withCredentials: true
        })
    }

    signup = ({ username, password, country }) => this.service.post('/signup', { username, password, country })
    login = ({ username, password }) => this.service.post('/login', { username, password })
    logout = () => this.service.post('/logout')
    isLoggedIn = () => this.service.get('/loggedin')
}