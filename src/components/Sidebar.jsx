import React from 'react'
import {Button, Dropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Sidebar = () => {
    return (
        <div style={{
            height:'100vh',
            width:'15rem',
            border:'2px solid black',
            left:'0px',
            
        }}>
            <div style={{marginTop:'30px'}}>
            <div className="d-grid gap-2 ">
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Products
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to='/dashboard/products'>Create a Product</Dropdown.Item>
                    
                </Dropdown.Menu>
                </Dropdown>
            <Button  variant="dark" size="lg">
                Products
            </Button>
            <Button as={Link} to='/dashboard/users' variant="dark" size="lg">
                Users
            </Button>
            </div>
            </div>
        </div>
    )
}

export default Sidebar
