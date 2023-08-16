import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {add} from "../store/cartSlice";
const Product = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch(err=> console.log(err));
  }, []);

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
