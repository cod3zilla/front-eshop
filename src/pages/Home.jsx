import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { productsAction } from '../actions/productsAction'
import { Row,Col,Image } from 'react-bootstrap'
import Product from '../components/Product'
import Loading from '../components/Loading'
import Message from '../components/Message'

const Home = () => {
    const dispatch=useDispatch()
    const productList=useSelector(state=>state.productList)
    const {loading,error,products}=productList
    
    useEffect(()=>{
        dispatch(productsAction())
    },[dispatch])
        
    
    return (
    <>
        
        {loading ?(<Loading/>)
        :error ? (<Message variant="danger" message={error}/>) 
        : (
            <Row>
                <Image style={{height:'18rem',marginTop:'1rem'}} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7bb49d2a-8588-41e7-9081-342339bfb37d/ddl95sj-4f2dc038-52f4-4369-8ce2-977c63d427eb.jpg/v1/fill/w_1024,h_284,q_75,strp/men_s_fashion__banner_by_asimcarnage_ddl95sj-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdiYjQ5ZDJhLTg1ODgtNDFlNy05MDgxLTM0MjMzOWJmYjM3ZFwvZGRsOTVzai00ZjJkYzAzOC01MmY0LTQzNjktOGNlMi05NzdjNjNkNDI3ZWIuanBnIiwiaGVpZ2h0IjoiPD0yODQiLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC83YmI0OWQyYS04NTg4LTQxZTctOTA4MS0zNDIzMzliZmIzN2RcL2FzaW1jYXJuYWdlLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.ktKYKsraKd0YmHxi2mHLJfVcWFbkYW687jM82VjT2sU"/>
            <h2>Men's Fashion</h2>
            {products.map(product =>(
                <Col md={3} key={product._id}>
                    {product.category==="men's clothing"?(<Product product={product} />):null}
                
                </Col>
            ))} 
            
            <Image style={{height:'18rem',marginTop:'1rem'}} src="https://dkemhji6i1k0x.cloudfront.net/000_clients/84990/page/84990yNL7ADjD.jpg"/>
            <h2>Women's Fashion</h2> 
            {products.map(product =>(
                <Col md={3} key={product._id}>
                    {product.category==="jewelery"?(<Product product={product} />):null}
                
                </Col>
            ))}                        
        </Row>
        )   
    }
          
    </>
    )
}

export default Home
