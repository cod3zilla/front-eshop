import React from 'react'
import { Navbar,Container,Nav,NavDropdown,NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {logout} from '../actions/userAction'

const Header = () => {
    const cart=useSelector(state=>state.cart)
    const {cartItems}=cart

    const userLog=useSelector(state=>state.userLog)
    const {userInfo}=userLog
    const dispatch=useDispatch()
    function handleLogout(){
            dispatch(logout())
    }
    return (
        <>
           <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
            <Container >
                <NavLink as={Link} to="/"><Navbar.Brand>E-shop</Navbar.Brand></NavLink>              
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    
                <Nav style={{marginLeft:'60rem'}} >
                
                {userInfo?(
                    <NavDropdown title={userInfo.name}>                                            
                    <NavDropdown.Item> 
                    <NavLink className="text-dark" as={Link} to="/profile"><i className="fas fa-user">&nbsp; Profile</i></NavLink>                                     
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={handleLogout}><i class="fas fa-sign-out-alt">Logout</i></NavDropdown.Item></NavDropdown>
                ):(
                    <div style={{display:'flex'}}>
                        <span style={{height:'28px',border:'2px solid white',borderRadius:'85%',background:'#fff', color:'red'}}><strong>{cartItems.length}</strong></span>
                        <NavLink as={Link} to="/cart"><i className="fas fa-shopping-cart">Cart</i></NavLink>
                    <NavLink as={Link} to="/login"><i className="fas fa-user">&nbsp; Signin</i></NavLink>

                    </div>
                )}  
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar> 
        </>
    )
}

export default Header
