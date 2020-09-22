import React, { Component } from 'react'
import FoodsService from '../../../service/foods.service'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { Link } from 'react-router-dom'


class FoodDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            foodDetails: [],
        }
        this.foodsService = new FoodsService()
    }

    componentDidMount = () => {

        const id = this.props.match.params.food_id
        
        this.foodsService
            .getOneFood(id)
            .then(response => this.setState({ foodDetails: response.data }))
            .catch(err => console.log(err))

    }

    
    render() {

        return (

            !this.state.foodDetails ? <h3>CARGANDO</h3> :
            

                <Container as="main" fluid="md">
                    <Row>
                        <Col>
                            <h1>{this.state.foodDetails.name}</h1>
                            <img style={{ width: 250 }} src={this.state.foodDetails.img} alt={this.state.foodDetails.name} />
                        </Col>


                        <Col md={8}>
                            <h2>Especificaciones</h2>
                            <p>{this.state.foodDetails.description}</p>
                            <hr></hr>
                            <p>Precio: {this.state.foodDetails.price}€</p>



                            <Tabs id="uncontrolled-tab-example">

                                <Tab eventKey="nutricional" title="Nutricional">
                                    <p>Información Nutricional</p>
                                    <hr></hr>
                                    <p>Aporte nutricional por 100gr:</p>
                                    <lu>
                                        <li>Calorias: {this.state.foodDetails.kcal}</li>
                                        <li>Proteinas: {this.state.foodDetails.protein}</li>
                                        <li>Grasas: {this.state.foodDetails.fat}</li>
                                        <li>Carbohidratos: {this.state.foodDetails.carbs}</li>
                                    </lu>

                                </Tab>

                                <Tab eventKey="Origen" title="Origen">

                                    <p>Origen</p>
                                    <hr></hr>
                                    <p>{this.state.foodDetails.name} </p>
                                    {/* procedente de: <lu> {this.state.foodDetails && this.state.foodDetails.map((elm,i) => {
                                        return <li key={i}> {this.state.foodDetails.origin[elm]} </li>})
                                        }</lu> </p>
                                    */}
                                    {/* {this.state.foodDetails && this.state.foodDetails.origin.map(elm=> <span>key={elm._id} elm={elm} </span>)} </p> */}
{/* 
                                    <lu>
                                       {/* intento FAIL return ({this.state.origins.forEach(elm =>
                                        <li>
                                            {elm.origin}
                                        </li> )}) */}

                                        {/* <li>
                                            {this.state.foodDetails.origin}
                                        </li> *
                                    </lu>
                                     */}
                                </Tab>
                                <Tab eventKey="Stock" title="Stock" >
                                    <p>Stock</p>
                                    <hr></hr>
                                    <p>Stock actual: {this.state.foodDetails.stock} unidades en stock</p>

                                </Tab>

                            </Tabs>
                            <Link className="btn btn-dark btn-md" to='/alimentos'>Volver a lista alimentos</Link>
                        </Col>
                    </Row>

                </Container>

        )
    }
}

export default FoodDetails
