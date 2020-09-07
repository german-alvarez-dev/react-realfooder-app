import React, { Component } from 'react'
import AuthService from './../../../service/auth.service'
import CountryService from '../../../service/country.service'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { Link } from 'react-router-dom'


class Signup extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loginInfo: {
                username: '',
                password: '',
                country: '',
            },
            errorMessage: ''
        }
        this.authService = new AuthService()
        this.countryService = new CountryService()

    }


    componentDidMount = () => this.updateCountriesList()

    updateCountriesList = () => {
        this.countryService
            .getAllCountries()
            .then(response => this.setState({ countries: response.data }))
            .catch(err => console.log(err))
    }


    handleInputChange = e => {

        let loginInfoCopy = { ...this.state.loginInfo }
        const { name, value } = e.target
        loginInfoCopy = { ...loginInfoCopy, [name]: value }

        this.setState({ loginInfo: loginInfoCopy })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.authService.signup(this.state.loginInfo)
            .then(response => {
                this.props.setTheUser(response.data)
                this.props.history.push('/')
            })
            .catch(err => console.log(err))
    }

    


    render() {

        return (
            <Container>

                <Row>
                    <Col md={{ span: 4, offset: 4 }}>

                        <h3>Registro de usuario</h3>
                        <hr></hr>
                        <Form onSubmit={this.handleSubmit}>

                            <Form.Group controlId="name">
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control name="username" type="text" value={this.state.username} onChange={this.handleInputChange} />
                            </Form.Group>

                            <Form.Group controlId="pwd">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control name="password" type="password" value={this.state.password} onChange={this.handleInputChange} />
                            </Form.Group>

                            <Form.Group controlId="cnty">
                                <Form.Label>País</Form.Label>

                                <Form.Control as="select" name="country" onChange={this.handleInputChange} >
                                    
                                <option>Selecciona país</option>
                                   {this.state.countries && this.state.countries.map(elm =>
                                  <option value={elm._id} key={elm._id}> {elm.name} </option> )}

                                </Form.Control>
                            </Form.Group>


                            <p
                                className='error-message'
                                style={{ display: this.state.errorMessage ? 'block' : 'none' }}
                            >{this.state.errorMessage}</p>

                            <Button variant="dark" type="submit">Registrarme</Button>
                        </Form>

                        <p><small>¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link></small></p>

                    </Col>
                </Row>

            </Container>
        )
    }
}


export default Signup