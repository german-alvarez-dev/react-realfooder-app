import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { Switch, Route } from 'react-router-dom'
import Navbar from './ui/navbar/Navbar'
import Message from './ui/MiniToast'

import IndexPage from './pages/index/Index-page'

import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'
import AlimentosPage from './pages/alimentos/alimentos'
import EstadisticasPage from './pages/estadisticas/index'
import FoodDetails from './pages/Food-details/food-details'
import FoodForm from './pages/Food-form/index'
//import CustomToast from './ui/MiniToast'

import AuthService from '../service/auth.service'

class App extends Component {

    constructor() {
        super()
        this.state = { 
            loggedInUser: null,
            toast: {
                visible: false,
                text: ''
            }
         }
        
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


    handleToast = (visible, text = '') => {
        let toastCopy = { ...this.state.toast }
        toastCopy = { visible, text }
        this.setState({ toast: toastCopy })
      }

    render() {

        this.fetchUser()

        return (
            <>
                <Navbar setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} handleToast={this.handleToast} />
                <Switch>
                    <Route path="/" exact component={IndexPage} />
                    <Route path="/login" render={props => <Login {...props} setTheUser={this.setTheUser} />} />
                    <Route path="/signup" render={props => <Signup {...props} setTheUser={this.setTheUser} handleToast={this.handleToast}/>} />
                    <Route exact path="/alimentos" render={props => <AlimentosPage loggedInUser={this.state.loggedInUser} {...props} />} />

                    <Route exact path="/estadisticas" render={props => <EstadisticasPage {...props} />} />
                    <Route path="/details/:food_id" render={props => <FoodDetails loggedInUser={this.state.loggedInUser} {...props} />} />
                    <Route path="/foods/newFood" render={() => <FoodForm />} />
                </Switch>

                <Message {...this.state.toast} handleToast={this.handleToast} />
            </>
        )
    }
}

export default App