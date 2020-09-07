import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

import FoodsService from '../../../service/foods.service'
import { Link } from 'react-router-dom'

//import FoodCard from './alimentos-card'
import FoodForm from '../Food-form/index'

import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './alimentos.css'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'


class AlimentosPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            foods: [],
            showModal: false
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

    handleModal = status => this.setState({ showModal: status })

    handleFormSubmit = () => {
        this.handleModal(false)
        this.updateFoodsList()
    }

    render() {
        let filterFoods = this.state.foods
        // let filterFoods = this.state.foods.filter(
        //     (elm) => {
        //         return elm.name.indexOf(this.state.foods) !== -1
        //     }
        // )

        return (
            <Container className="alimentos-page">
                <header>
                    <h1>Stock de alimentos</h1>
                    <p>Consulta los detalles de stock, precios y origen de nuestros alimentos</p>
                </header>

                <Row>
                    <Col md={4}>
                        <Form onSubmit={this.handleFormSubmit}>

                            <Form.Group>
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control onChange={this.updateFoodsList} value={this.state.foods.name} name="name" type="text" />
                            </Form.Group>

                        </Form>

                    </Col>
                    <Col md={{ span: 3, offset: 5 }}>
                        <Button className="botonNew" onClick={() => this.handleModal(true)} variant="light" size="lg" >Añadir nuevo alimento</Button>
                    </Col>
                </Row>
                
                {
                    !this.state.foods ? <h3>CARGANDO</h3> :
                        <Row>
                            {filterFoods.map(elm =>

                                <Col md={12}>
                                    <Table className="tablefood" bordered>
                                        <tr>
                                            <td><img style={{ width: 50 }} src={elm.img} alt="alimento" /></td>
                                            <td>Nombre: {elm.name}</td>
                                            <td>Precio: {elm.price}  | </td>
                                            <td>Stock: {elm.stock}</td>
                                            <td><Link to={`/details/${elm._id}`} className="botonDet btn btn-light btn-block btn-sm">Info detallada</Link></td>
                                        </tr>
                                    </Table>
                                </Col>
                            )}
                        </Row>
                }

                <Modal size="lg" show={this.state.showModal} onHide={() => this.handleModal(false)}>
                    <Modal.Body>
                        <FoodForm loggedInUser={this.props.loggedInUser} handleFormSubmit={this.handleFormSubmit} />
                    </Modal.Body>
                </Modal>
            </Container>



        )
    }
}

export default AlimentosPage