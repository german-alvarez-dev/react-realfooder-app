import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

import FoodsService from '../../../service/foods.service'
import { Link } from 'react-router-dom'

//import FoodCard from './alimentos-card'
import FoodForm from '../Food-form/index'
//import CustomToast from '../../ui/MiniToast'

import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './alimentos.css'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Paper from '../../img/paperRecycle.png'
import Modal from 'react-bootstrap/Modal'


class AlimentosPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            foods: [],
            //Alimento: null,
            showModal: false,
            filteredFoods: undefined,
            name: '',
        }
        this.foodsService = new FoodsService()
    }

    componentDidMount = () => this.updateFoodsList()

    updateFoodsList = () => {

        this.foodsService
            .getAllFoods()
            .then(response => this.setState({ foods: response.data, filteredFoods: response.data }))
            .catch(err => console.log(err))

    }


    deleteFood = (id) => {
        this.foodsService
            .deleteFood(id)
            .then(response => {
                const newFoods = this.state.foods.filter(foods => foods._id !== id)
                this.setState({ foods: newFoods })
                
            })
            .catch(err => console.log(err))
    }


    handleModal = status => this.setState({ showModal: status })
    //handleModal = (status, id) => this.setState({ showModal: status, food: id })

    finishFormSubmit = () => {
        this.handleModal(false)
        this.updateFoodsList()
    }

    handleInputChange = e => {
        this.setState({ name: e.target.value })
        this.filterFoods(e.target.value)
    }

    handleFoodSubmit = () => {
        this.handleModal(false)
        this.updateFoodsList()
    }

    filterFoods = foodie => {
        console.log(foodie)
        const foodsCopy = [...this.state.foods]
        const filteredFoods = foodsCopy.filter(elm => elm.name.toLowerCase().includes(foodie.toLowerCase()))
        this.setState({ filteredFoods })
    }


    render() {

        const id = this.food_id
        const { loggedInUser } = this.props
        const editingFood = this.state.filteredFoods ? this.state.filteredFoods.filter(elm => elm._id === this.state.filteredFoods)[0] : {}
        console.log(editingFood)
        console.log(this.props.loggedInUser.country)

        //console.log(this.state.filteredFoods._id)

        return (

            <Container className="alimentos-page">
                <header>
                    <h1>Stock de alimentos</h1>
                    <p>Consulta los detalles de stock, precios y origen de nuestros alimentos</p>
                </header>

                <Row>
                    <Col md={4}>
                        <Form>

                            <Form.Group>
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control onChange={this.handleInputChange} value={this.state.name} name="name" type="text" placeholder="Busca un alimento" />
                            </Form.Group>

                        </Form>

                    </Col>
                    <Col md={{ span: 3, offset: 5 }}>
                        <Button className="botonNew" onClick={() => this.handleModal(true)} variant="light" size="lg" >Añadir nuevo alimento</Button>
                    </Col>
                </Row>

                {

                    !this.state.filteredFoods ? <h3>CARGANDO</h3> :
                        <Row>

                            <Col md={12}>
                                <Table className="tablefood" bordered>

                                    {this.state.filteredFoods.map((elm) => {
                                        return elm.origin.includes(this.props.loggedInUser.country) ?


                                            <tr>
                                                <td><img style={{ width: 50 }} src={elm.img} alt="alimento" /></td>
                                                <td>Nombre: {elm.name}</td>
                                                <td>Precio: {elm.price}  | </td>
                                                <td>Stock: {elm.stock}</td>
                                                <td><Link to={`/details/${elm._id}`} className="botonDet btn btn-light btn-block btn-sm">Info detallada</Link></td>
                                                {console.log(elm._id)}
                                                {
                                                    this.props.loggedInUser._id === elm.owner_id && <td> <Button variant="link" onClick={() => this.deleteFood(elm._id)}><img src={Paper} alt="delete" style={{ display: 'flex', width: '20px', height: '20px' }} /></Button> </td>

                                                }

                                                {/* {console.log(elm.origin.includes(this.props.loggedInUser.country))} */}

                                                {
                                                    this.props.loggedInUser._id === elm.owner_id && <td> <Button onClick={() => this.handleModal(true, id)} variant="info" size="sm" style={{ marginBottom: '20px', margin: '5px' }}>Editar</Button> </td>
                                                }

                                            </tr>

                                            : null
                                    }

                                    )}

                                </Table>
                            </Col>

                        </Row>
                }

                {/* Solo crear */}
                <Modal size="lg" show={this.state.showModal} onHide={() => this.handleModal(false)}>
                    <Modal.Body>

                        <FoodForm {...this.props} handleFoodSubmit={this.handleFoodSubmit} />

                    </Modal.Body>
                </Modal>

                {/* Crear y editar */}
                {/* <Modal size="lg" show={this.state.showModal} onHide={() => this.handleModal(false)}>
                    <Modal.Body>
                            {this.state.isCreating
                            ?
                            <FoodForm onHide={this.onHide} editingFood={editingFood} finishFormSubmit={this.finishFormSubmit} />
                            :
                            <FoodForm onHide={this.onHide} finishFormSubmit={this.finishFormSubmit} isCreating />
                        }
                       
                    </Modal.Body>
                </Modal> */}

            </Container>



        )
    }
}

export default AlimentosPage