import React, { useEffect, } from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch,useSelector } from "react-redux";
import {add} from "../store/cartSlice";
import { getProducts } from "../store/productSlice";
import { Alert } from "react-bootstrap";
import StatusCode from "../store/utils/StatusCode";
const Product = () => {
  const dispatch = useDispatch();
  const {data:products,status} = useSelector(state=> state.products)

  useEffect(() => {
    //dispatch an action for fetch products
    dispatch(getProducts())

    // fetch("https://fakestoreapi.com/products")
    //   .then((response) => response.json())
    //   .then((data) => setProducts(data))
    //   .catch(err=> console.log(err));
  }, [dispatch]);

  if(status===StatusCode.LOADING){
    return <p>loading....</p>
  }

  if(status===StatusCode.ERROR){
    return <Alert key="danger" variant="danger">
                Something went wrong! try again later
            </Alert>

  }

  const addToCart = (product)=>{
    //dispatch an add action
    dispatch(add(product))
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
          <Button variant="primary" onClick={()=> addToCart(product)}>Add To Cart</Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <div>
      <h2>Product Dashboard</h2>
      <div className="row">{cards}</div>
    </div>
  );
};

export default Product;
