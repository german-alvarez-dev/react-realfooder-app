import React, { Component } from 'react'

import FoodsService from '../../../service/foods.service'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

// class FoodForm extends Component {
//     constructor(props) {
//         super(props)
//         const { editingFood } = this.props
//         this.state = {
//             id: editingFood ? editingFood._id : '',
//             name: editingFood ? editingFood.name : '',
//             description: editingFood ? editingFood.description : '',
//             origin: editingFood ? editingFood.origin : '',
//             img: editingFood ? editingFood.img : '',
//             price: editingFood ? editingFood.price : '',
//             protein: editingFood ? editingFood.protein : '',
//             fat: editingFood ? editingFood.fat : '',
//             carbs: editingFood ? editingFood.carbs : '',
//             kcal: editingFood ? editingFood.kcal : '',
//             stock: editingFood ? editingFood.stock : '',
//             importTax: true,
//             owner_id: editingFood ? editingFood.owner_id : ''

//         }
//         this.foodsService = new FoodsService()
//     }


//     handleInputChange = e => {
//         const value = e.target.type === "file" ? e.target.files[0] : e.target.value
//         this.setState({ [e.target.name]: value })
//     }


//     handleFormSubmit = e => {
//         e.preventDefault()
//         const uploadData = new FormData()
//         Object.keys(this.state).forEach((key) => {
//             uploadData.append(key, this.state[key])
//         })
//         if (this.state.id) {
//             this.foodsService
//                 .editFood(this.state.id, uploadData)
//                 .then(() => this.props.finishFormSubmit())
//                 .catch(err => console.log(err))
//         } else {
//             this.foodsService
//                 .createFood(uploadData)
//                 .then(() => this.props.finishFormSubmit())
//                 .catch(err => console.log(err))
//         }
//     }


//     render() {
//         return (

//             <>
//                 <h3>{this.state.id ? "Editar Alimento" : "Nuevo Alimento"}</h3>
//                 <hr></hr>

//                 <Form onSubmit={this.handleFormSubmit}>
//                     <Row>
//                         <Col>
//                             <Form.Group>
//                                 <Form.Label>Nombre</Form.Label>
//                                 <Form.Control
//                                     onChange={this.handleInputChange} value={this.state.name} name="name" type="text" />
//                             </Form.Group>

//                             <Form.Group >
//                                 <Form.Label>Descripción</Form.Label>
//                                 <Form.Control
//                                     onChange={this.handleInputChange} value={this.state.description} name="description" type="text" />
//                             </Form.Group>

//                             <Form.Group >
//                                 <Form.Label>País de Origen (separar por comas)</Form.Label>
//                                 <Form.Control
//                                     onChange={this.handleInputChange} value={this.state.origin} name="origin" type="text" />
//                             </Form.Group>

//                             <Form.Group >
//                                 <Form.Label>Imagen (URL)</Form.Label>
//                                 <Form.Control
//                                     onChange={this.handleInputChange} value={this.state.img} name="img" type="text" />
//                             </Form.Group>

//                         </Col>

//                         <Col>

//                             <Row>
//                                 <Col>

//                                     <Form.Group  >
//                                         <Form.Label>Precio</Form.Label>
//                                         <Form.Control
//                                             onChange={this.handleInputChange} value={this.state.price} name="price" type="number" />
//                                     </Form.Group>

//                                     <Form.Group >
//                                         <Form.Label>Proteínas</Form.Label>
//                                         <Form.Control
//                                             onChange={this.handleInputChange} value={this.state.protein} name="protein" type="number" />
//                                     </Form.Group>

//                                     <Form.Group >
//                                         <Form.Label>Carbohidratos</Form.Label>
//                                         <Form.Control
//                                             onChange={this.handleInputChange} value={this.state.carbs} name="carbs" type="number" />
//                                     </Form.Group>

//                                 </Col>
//                                 <Col>

//                                     <Form.Group >
//                                         <Form.Label>Kcal</Form.Label>
//                                         <Form.Control
//                                             onChange={this.handleInputChange} value={this.state.kcal} name="kcal" type="number" />
//                                     </Form.Group>

//                                     <Form.Group >
//                                         <Form.Label>Grasas</Form.Label>
//                                         <Form.Control
//                                             onChange={this.handleInputChange} value={this.state.fat} name="fat" type="number" />
//                                     </Form.Group>

//                                     <Form.Group  >
//                                         <Form.Label>Stock</Form.Label>
//                                         <Form.Control
//                                             onChange={this.handleInputChange} value={this.state.stock} name="stock" type="number" />
//                                     </Form.Group>

//                                 </Col>
//                             </Row>

//                             <Form.Group>
//                                 <Form.Check required name="terms" label="Aplica impuestos de importación" />
//                             </Form.Group>

//                             <Button variant="dark" type="submit">Crear Alimento</Button>

//                         </Col>
//                     </Row>

//                 </Form>

//             </>

//         )
//     }
// }

// export default FoodForm


class FoodForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            description: '',
            origin: '',
            img: '',
            price: '0',
            protein: '0',
            fat: '0',
            carbs: '0',
            kcal: '0',
            stock: '0',
            importTax: false,
            owner_id: props.loggedInUser._id

        }
        this.foodsService = new FoodsService()
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.foodsService
            .createFood(this.state)
            .then(() => this.props.handleFoodSubmit())
            .catch(err => console.log(err))
    }

    render() {
        return (

            <>
                <h3>Nuevo Alimento</h3>
                <hr></hr>

                <Form onSubmit={this.handleFormSubmit}>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    onChange={this.handleInputChange} value={this.state.name} name="name" type="text" />
                            </Form.Group>

                            <Form.Group >
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control
                                    onChange={this.handleInputChange} value={this.state.description} name="description" type="text" />
                            </Form.Group>

                            <Form.Group >
                                <Form.Label>País de Origen (separar por comas)</Form.Label>
                                <Form.Control
                                    onChange={this.handleInputChange} value={this.state.origin} name="origin" type="text" />
                            </Form.Group>

                            <Form.Group >
                                <Form.Label>Imagen (URL)</Form.Label>
                                <Form.Control
                                    onChange={this.handleInputChange} value={this.state.img} name="img" type="text" />
                            </Form.Group>

                        </Col>

                        <Col>

                            <Row>
                                <Col>

                                    <Form.Group  >
                                        <Form.Label>Precio</Form.Label>
                                        <Form.Control
                                            onChange={this.handleInputChange} value={this.state.price} name="price" type="number" />
                                    </Form.Group>

                                    <Form.Group >
                                        <Form.Label>Proteínas</Form.Label>
                                        <Form.Control
                                            onChange={this.handleInputChange} value={this.state.protein} name="protein" type="number" />
                                    </Form.Group>

                                    <Form.Group >
                                        <Form.Label>Carbohidratos</Form.Label>
                                        <Form.Control
                                            onChange={this.handleInputChange} value={this.state.carbs} name="carbs" type="number" />
                                    </Form.Group>

                                </Col>
                                <Col>

                                    <Form.Group >
                                        <Form.Label>Kcal</Form.Label>
                                        <Form.Control
                                            onChange={this.handleInputChange} value={this.state.kcal} name="kcal" type="number" />
                                    </Form.Group>

                                    <Form.Group >
                                        <Form.Label>Grasas</Form.Label>
                                        <Form.Control
                                            onChange={this.handleInputChange} value={this.state.fat} name="fat" type="number" />
                                    </Form.Group>

                                    <Form.Group  >
                                        <Form.Label>Stock</Form.Label>
                                        <Form.Control
                                            onChange={this.handleInputChange} value={this.state.stock} name="stock" type="number" />
                                    </Form.Group>

                                </Col>
                            </Row>

                            <Form.Group>
                                <Form.Check required name="terms" label="Aplica impuestos de importación" />
                            </Form.Group>

                            <Button variant="dark" type="submit">Crear Alimento</Button>

                        </Col>
                    </Row>

                </Form>

            </>

        )
    }
}

export default FoodForm