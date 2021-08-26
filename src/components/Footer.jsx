import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'

const Footer = () => {
    return (
        <>
           <footer>
               <Container>
                   <Row>
                       <Col md={12}>
                           <p className="text-center">Copyright@ 2020</p>
                       </Col>
                   </Row>
               </Container>
            </footer> 
        </>
    )
}

export default Footer
