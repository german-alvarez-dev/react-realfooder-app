import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

import FoodsService from '../../../service/foods.service'
import { Link } from 'react-router-dom'

import { ResponsiveBar } from '@nivo/bar'
import { ResponsivePie } from '@nivo/pie'
import { ResponsiveRadar } from '@nivo/radar'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import "./estadisticas.css"


class EstadisticasPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            foods: [],
            //Alimento: null,
            fiveFoods: undefined,
            name: '',
        }
        this.foodsService = new FoodsService()
    }

    componentDidMount = () => this.updateFoodsList()

    updateFoodsList = () => {

        this.foodsService
            .getAllFoods()
            .then(response => this.setState({ foods: response.data, fiveFoods: response.data }))
            .catch(err => console.log(err))

    }


    render() {


        const fiveFoods = [...this.state.foods].slice(0, 5)
        const data = [
            {
                "id": "c",
                "label": "c",
                "value": 244,
                "color": "hsl(11, 70%, 50%)"
            },
            {
                "id": "grillo",
                "label": "grillo",
                "value": 137,
                "color": "hsl(119, 70%, 50%)"
            },
            {
                "id": "go",
                "label": "go",
                "value": 417,
                "color": "hsl(359, 70%, 50%)"
            },
            {
                "id": "elixir",
                "label": "elixir",
                "value": 163,
                "color": "hsl(239, 70%, 50%)"
            },
            {
                "id": "lisp",
                "label": "lisp",
                "value": 126,
                "color": "hsl(273, 70%, 50%)"
            }
        ]
        console.log(fiveFoods)
        //console.log(data)

        return (

            <Container>
                <header>
                    <h1>Estadisticas de alimentos</h1>
                </header>


                <Row>

                    <Col className="estadisticas">
                        <h3>Aportes nutricionales</h3>

                        <ResponsiveBar
                            data={fiveFoods}
                            keys={['protein', 'carbs', 'fat']} //keys={[ 'hot dog', 'burger', 'sandwich', 'kebab', 'fries']} contienen numeros
                            indexBy='name' //indexBy="country" contiene v
                            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                            padding={0.3}
                            colors={{ scheme: 'nivo' }}
                            defs={[
                                {
                                    id: 'dots',
                                    type: 'patternDots',
                                    background: 'inherit',
                                    color: '#38bcb2',
                                    size: 4,
                                    padding: 1,
                                    stagger: true
                                },
                                {
                                    id: 'lines',
                                    type: 'patternLines',
                                    background: 'inherit',
                                    color: '#eed312',
                                    rotation: -45,
                                    lineWidth: 6,
                                    spacing: 10
                                }
                            ]}
                            fill={[
                                {
                                    match: {
                                        id: 'protein'
                                    },
                                    id: 'dots'
                                },
                                {
                                    match: {
                                        id: 'carbs'
                                    },
                                    id: 'lines'
                                }
                            ]}
                            borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                            axisTop={null}
                            axisRight={null}
                            axisBottom={{
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: 0,
                                legend: 'Valor nutricional',
                                legendPosition: 'middle',
                                legendOffset: 32
                            }}
                            axisLeft={{
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: 0,
                                legend: 'Aporte',
                                legendPosition: 'middle',
                                legendOffset: -40
                            }}
                            labelSkipWidth={12}
                            labelSkipHeight={12}
                            labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                            legends={[
                                {
                                    dataFrom: 'keys',
                                    anchor: 'bottom-right',
                                    direction: 'column',
                                    justify: false,
                                    translateX: 120,
                                    translateY: 0,
                                    itemsSpacing: 2,
                                    itemWidth: 100,
                                    itemHeight: 20,
                                    itemDirection: 'left-to-right',
                                    itemOpacity: 0.85,
                                    symbolSize: 20,
                                    effects: [
                                        {
                                            on: 'hover',
                                            style: {
                                                itemOpacity: 1
                                            }
                                        }
                                    ]
                                }
                            ]}
                            animate={true}
                            motionStiffness={90}
                            motionDamping={15}
                        />


                    </Col>
                </Row>

                <Row>
                    <Col md={6} className="estadisticasb">
                        <header>
                            <h1>Aportes calóricos</h1>
                        </header>
                        <ResponsivePie
                            data={fiveFoods}
                            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                            innerRadius={0.5}
                            padAngle={0.7}
                            cornerRadius={3}
                            colors={{ scheme: 'nivo' }}
                            borderWidth={1}
                            borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                            radialLabelsSkipAngle={10}
                            radialLabelsTextXOffset={6}
                            radialLabelsTextColor="#333333"
                            radialLabelsLinkOffset={0}
                            radialLabelsLinkDiagonalLength={16}
                            radialLabelsLinkHorizontalLength={24}
                            radialLabelsLinkStrokeWidth={1}
                            radialLabelsLinkColor={{ from: 'color' }}
                            slicesLabelsSkipAngle={10}
                            slicesLabelsTextColor="#333333"
                            animate={true}
                            motionStiffness={90}
                            motionDamping={15}
                            defs={[
                                {
                                    id: 'dots',
                                    type: 'patternDots',
                                    background: 'inherit',
                                    color: 'rgba(255, 255, 255, 0.3)',
                                    size: 4,
                                    padding: 1,
                                    stagger: true
                                },
                                {
                                    id: 'lines',
                                    type: 'patternLines',
                                    background: 'inherit',
                                    color: 'rgba(255, 255, 255, 0.3)',
                                    rotation: -45,
                                    lineWidth: 6,
                                    spacing: 10
                                }
                            ]}
                            fill={[
                                {
                                    match: {
                                        name: 'Espárragos'
                                    },
                                    id: 'dots'
                                },
                                {
                                    match: {
                                        id: '5f3e44f6f165120017db3ff3'
                                    },
                                    id: 'dots'
                                },
                                {
                                    match: {
                                        id: "5f3e44f6f165120017db3ff2"
                                    },
                                    id: 'dots'
                                },
                                {
                                    match: {
                                        id: 'python'
                                    },
                                    id: 'dots'
                                },
                                {
                                    match: {
                                        id: 'scala'
                                    },
                                    id: 'lines'
                                },
                                {
                                    match: {
                                        id: 'lisp'
                                    },
                                    id: 'lines'
                                },
                                {
                                    match: {
                                        id: 'elixir'
                                    },
                                    id: 'lines'
                                },
                                {
                                    match: {
                                        id: 'javascript'
                                    },
                                    id: 'lines'
                                }
                            ]}
                            legends={[
                                {
                                    anchor: 'bottom',
                                    direction: 'row',
                                    translateY: 56,
                                    itemWidth: 100,
                                    itemHeight: 18,
                                    itemTextColor: '#999',
                                    symbolSize: 18,
                                    symbolShape: 'circle',
                                    effects: [
                                        {
                                            on: 'hover',
                                            style: {
                                                itemTextColor: '#000'
                                            }
                                        }
                                    ]
                                }
                            ]}
                        />
                    </Col>

                    <Col md={6} className="estadisticasb">
                        <header>
                            <h1>Comparativa nutricional</h1>
                        </header>

                        <ResponsiveRadar
                            data={data}
                            keys={['chardonay', 'carmenere', 'syrah']}
                            indexBy="taste"
                            maxValue="auto"
                            margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
                            curve="linearClosed"
                            borderWidth={2}
                            borderColor={{ from: 'color' }}
                            gridLevels={5}
                            gridShape="circular"
                            gridLabelOffset={36}
                            enableDots={true}
                            dotSize={10}
                            dotColor={{ theme: 'background' }}
                            dotBorderWidth={2}
                            dotBorderColor={{ from: 'color' }}
                            enableDotLabel={true}
                            dotLabel="value"
                            dotLabelYOffset={-12}
                            colors={{ scheme: 'nivo' }}
                            fillOpacity={0.25}
                            blendMode="multiply"
                            animate={true}
                            motionStiffness={90}
                            motionDamping={15}
                            isInteractive={true}
                            legends={[
                                {
                                    anchor: 'top-left',
                                    direction: 'column',
                                    translateX: -50,
                                    translateY: -40,
                                    itemWidth: 80,
                                    itemHeight: 20,
                                    itemTextColor: '#999',
                                    symbolSize: 12,
                                    symbolShape: 'circle',
                                    effects: [
                                        {
                                            on: 'hover',
                                            style: {
                                                itemTextColor: '#000'
                                            }
                                        }
                                    ]
                                }
                            ]}
                        />
                    </Col>
                </Row>





            </Container>



        )
    }
}

export default EstadisticasPage