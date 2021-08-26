import React from 'react'
import {Form,Button,Row,Col,Container} from 'react-bootstrap'


const CreateProduct = ({match}) => {
    
    return (
        
        <Container>
            <Row>
                <Col md={6} className="justify-content-center mx-5" >
                <Form>
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>title</Form.Label>
                <Form.Control type="text" placeholder="title" />                
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
                <Form.Label>description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="description" />                
            </Form.Group>
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>title</Form.Label>
                <Form.Control type="text" placeholder="title" />                
            </Form.Group>
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>title</Form.Label>
                <Form.Control type="text" placeholder="title" />                
            </Form.Group>
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>title</Form.Label>
                <Form.Control type="text" placeholder="title" />                
            </Form.Group>
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>title</Form.Label>
                <Form.Control type="text" placeholder="title" />                
            </Form.Group>

            
            <Button variant="primary" type="submit">
                Create Product
            </Button>
            </Form>
                </Col>
            </Row>
        </Container>
        
    )
}

export default CreateProduct
