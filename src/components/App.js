import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { Switch, Route } from 'react-router-dom'
import Navbar from './ui/navbar/Navbar'
import IndexPage from './pages/index/Index-page'

import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'
import AlimentosPage from './pages/alimentos/alimentos'
import FoodDetails from './pages/Food-details/food-details'
import FoodForm from './pages/Food-form/index'


import AuthService from '../service/auth.service'

class App extends Component {

    constructor() {
        super()
        this.state = { loggedInUser: null }
        this.authService = new AuthService()
    }

    setTheUser = userObj => this.setState({ loggedInUser: userObj }, () => console.log('El estado de App ha cambiado:', this.state))

    fetchUser = () => {
        if (this.state.loggedInUser === null) {
            this.authService.isLoggedIn()
                .then(response => this.setTheUser(response.data))
                .catch(() => this.setTheUser(false))
        }
    }


    render() {

        this.fetchUser()

        return (
            <>
                <Navbar setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} />
                <Switch>
                    <Route path="/" exact component={IndexPage} />
                    <Route path="/login" render={props => <Login {...props} setTheUser={this.setTheUser} />} />
                    <Route path="/signup" render={props => <Signup {...props} setTheUser={this.setTheUser} />} />
                    <Route exact path="/alimentos" render={props => <AlimentosPage loggedInUser={this.state.loggedInUser} {...props} />} />
                    <Route path="/details/:food_id" render={props => <FoodDetails loggedInUser={this.state.loggedInUser} {...props} />} />
                    <Route path="/foods/newFood" render={() => <FoodForm />} />
                </Switch>
            </>
        )
    }
}

export default App