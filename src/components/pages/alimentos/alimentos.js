import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

import FoodsService from '../../../service/foods.service'
import { Link } from 'react-router-dom'

import FoodCard from './alimentos-card'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './alimentos.css'

import Form from 'react-bootstrap/Form'


class AlimentosPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            foods: [],
        }
        this.foodsService = new FoodsService()
    }

    componentDidMount = () => this.updateFoodsList()

    updateFoodsList = () => {
        this.foodsService
            .getAllFoods()
            .then(response => this.setState({ foods: response.data }))
            .catch(err => console.log(err))
    }


    render() {

        return (
            <Container className="alimentos-page">
                <header>
                    <h1>Stock de alimentos</h1>
                    <p>Consulta los detalles de stock, precios y origen de nuestros alimentos</p>
                </header>

                {/* <Form onSubmit={this.handleFormSubmit}>

                    <Form.Group>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.foods.name} name="name" type="text" />
                    </Form.Group>

                </Form> */}
                {
                    !this.state.foods ? <h3>CARGANDO</h3> :

                        <Row>
                            {this.state.foods.map(elm =>

                                <Col md={8}>

                        
                                    <div >
                                        <img style={{ width: 50 }} src={elm.img}/>  Nombre: {elm.name}  Precio: {elm.price} |  Stock: {elm.stock}
                                        <br></br>
                                    </div>

                                </Col>

                            )}

                        </Row>

                }
            </Container>

        )
    }
}

export default AlimentosPage