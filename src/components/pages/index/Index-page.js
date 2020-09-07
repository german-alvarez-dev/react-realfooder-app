import React from 'react'
import { Container } from 'react-bootstrap'
//import { Link } from 'react-router-dom'

const IndexPage = () => {
    return (
        <Container className="index-page">
            <header>
                <h1>RealFooder</h1>
                <p>Una sencilla SPA de alimentación</p>
            </header>
        </Container>
    )
}

export default IndexPage