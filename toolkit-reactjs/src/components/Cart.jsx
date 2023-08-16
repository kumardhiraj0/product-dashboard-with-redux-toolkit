import React from 'react'
import {useSelector } from "react-redux"
import { Card ,Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice'
const Cart = () => {
    const dispatch = useDispatch()
    const products = useSelector(state=> state.cart)
    const removeToCart = (id)=>{
        //dispatch a remove action
        dispatch(remove(id));


    }

    const cards = products.map((product) => (
        <div className="col-md-3" style={{ marginBottom: "10px" }} key={product.id}>
          <Card style={{ width: "18rem" }} className="h-100">
            <div className="text-center">
              <Card.Img
                variant="top"
                src={product.image}
                style={{ width: "100px", height: "130px" }}
              />
            </div>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>INR: {product.price}</Card.Text>
            </Card.Body>
            <Card.Footer style={{ backgroundColor: "white" }}>
              <Button variant="danger" onClick={()=> removeToCart(product.id)} >Remove To Cart</Button>
            </Card.Footer>
          </Card>
        </div>
      ));
    
  return (
    <>
        <div className="row">
            {cards}
        </div>
    </>
  )
}

export default Cart