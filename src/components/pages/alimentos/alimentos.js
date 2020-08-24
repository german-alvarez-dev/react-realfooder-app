import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

import FoodsService from '../../../service/foods.service'
import { Link } from 'react-router-dom'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import Form from 'react-bootstrap/Form'


class AlimentosPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            foods: undefined,
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


                {/* {this.state.foods.map(elm =>

                    <Container>
                        <Row>
                            <Col>
                                <img style={{ width: 100 }} src={elm.img} alt="foto alimento" />
                            </Col>
                            <Col>
                                <div>
                                    <p>Nombre: {elm.name}</p>
                                    <p>Precio: {elm.price}</p>
                                    <p>Stock disponible: {elm.stock} uds.</p>
                                    
                                </div>
                            </Col>
                        </Row>
                    </Container>

                )} */}




            </Container>
        )
    }
}

export default AlimentosPage