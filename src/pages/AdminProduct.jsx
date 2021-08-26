import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { productsAction } from '../actions/productsAction'
import {Link} from 'react-router-dom'

import Loading from '../components/Loading'
import { Button,Table } from 'react-bootstrap'

const AdminProduct = () => {
    const dispatch=useDispatch()
    const productList=useSelector(state=>state.productList)
    const {products}=productList
    
    useEffect(()=>{
        dispatch(productsAction())
    },[dispatch])
    
    return (
        <div>
            <h1>All products</h1>
            
            {!products?<Loading/>:(
                            <Table>
                                <thead>
                                    <tr>
                                        <td>ID</td>
                                        <td>TITLE</td>
                                        <td>CATEGORY</td>
                                        <td>IN-STOCK</td>
                                        <td>PRICE</td>
                                        <td>REVIEWS</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map(item=>(
                                        <tr key={item._id}>
                                          <td>{item._id}</td>  
                                          <td>{item.title}</td>  
                                          <td>{item.category}</td>  
                                          <td>{item.countInStock}</td>  
                                          <td>{item.price} </td>
                                          <td>{item.numReviews} </td>
                                          
                                          <td><Button as={Link} to={`/dashboard/create/${item._id}`} className="btn btn-success">Edit Products</Button></td> 
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        )}
        </div>
    )
}

export default AdminProduct
