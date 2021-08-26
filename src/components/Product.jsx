import React from 'react'
import { Card, NavLink,ListGroup,ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Ratings from './Ratings'
const Product = ({product}) => {
    return (
        <><NavLink as={Link} to={`/product/${product._id}`}>
            <Card className="p-2 rounded"style={{ width: '18rem' }}>
                
                <Card.Img src={product.image} variant="top" style={{ width: '16rem',height:'11rem' }}/>   
             
                 <ListGroup className="mt-1">
                 <Card.Body>
                    <Card.Title as="div">
                        <strong>{product.title}</strong>
                    </Card.Title>
                    <Card.Title as="div">
                        <Ratings rating={product.rating} reviews={product.reviews} />
                    </Card.Title>

                    <Card.Text>$ {product.price}</Card.Text>
                </Card.Body>
                 </ListGroup>
                
             


            </Card>
            </NavLink>
        </>
    )
}

export default Product
