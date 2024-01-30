// ShoppingCart.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity } from '../../Redux/reduces/carSlice';

const ShoppingCart = () => {
    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.car.carItems);
    const dispatch = useDispatch();
    const carTotalQuantity = useSelector((state) => state.car.carTotalQuantity) * 120000;

    const backToCatalog = () => {
        navigate("/catalog");
    };

    return (
        <div>
            <Card>
                <CardHeader style={{ textAlign: "center" }}>
                    <h2>Shopping Cart</h2>
                </CardHeader>
                <CardBody>
                    <Row>
                        {cartItems.map((car, index) => (
                            <Col key={index} sm={6} md={4}>
                                <Card style={{width: '380px', height: '400px'}}>
                                    <CardBody>
                                        <img src={car.urlPhoto} alt={car.mark} style={{width:'350px', height: '180px'}}/>
                                        <h4>{car.mark}</h4>
                                        <p>Power: {car.power}</p>
                                        <p>Speed: {car.speed}</p>
                                        <p>Quantity: {car.carQuantity}</p>
                                        <div>
                                            <Button onClick={() => dispatch(incrementQuantity(car.id))}>Increment</Button>
                                            <Button onClick={() => dispatch(decrementQuantity(car.id))}>Decrement</Button>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </CardBody>
                <CardFooter style={{ display: "flex", justifyContent: "space-between" }}>
                <p>Total amount: {carTotalQuantity} $</p>
                <div>
                    <Button onClick={backToCatalog}>Back to Catalog</Button>
                    <Button>Continue</Button>
                </div>
                </CardFooter>
            </Card>
        </div>
    );
};

export default ShoppingCart;
