import React,{ useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import styles from "./ItemDescription.styled";
import { Collapse } from "react-bootstrap";
import {
    useNavigate, useParams,
} from "react-router-dom";
import { getCar } from "../../API/api";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/reduces/carSlice"; 


export default function ItemDescription() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [open, setOpen] = useState(false);
    const [car, setCar] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchCar = async () => {
            try {
                const response = await getCar(id);
                setCar(response.data);
            } catch (error) {
                console.error("Помилка завантаження даних про авто:", error);
            }
        };

        fetchCar();
    }, [id]);

    const select = () => {
        setOpen(!open);
    }

    const goBack = () => {
        navigate("/catalog");
    }

    const handleAddToCart = (car) => {
        dispatch(addToCart(car));
    } 

    if (!car) {
        return <div className="loader">loading...</div>;
    }

    return (
        <div style={styles.container} className="container">
            <div className="row">
                <div className="col-md-6">
                    <img 
                        src={car.urlPhoto}
                        style={styles.img}
                        alt="Зображення"
                        className="img-fluid"
                    />
                </div>
                <div className="col-md-6">
                    <h2 style={styles.textHeader}>{car.mark}</h2>
                    <p style={styles.text}>
                        This is very luxury car. This car has {car.power} hp and 
                        can speed up to {car.speed} km/h. This machine has a sophisticated color and design.
                    </p>
                    <div style={styles.fields}>
                        <p>Countable field</p>
                        <p style={{marginLeft: '30px'}}>Selectable field</p>
                    </div>
                    <div style={styles.fields}>
                        <div className="search-box">
                            <input id="search" type="text" placeholder="1337..." style={{borderRadius: '10px', width: '100px'}}/>
                        </div>
                        <div className="select-field">
                            <button className="btn btn-primary" onClick={select} style={{marginLeft: '35px', width: '110px'}}>Select</button>
                        </div>
                    </div>
                    <Collapse in={open}>
                        <div className="select-field">
                            <div style={{marginLeft:'140px'}}>Something</div>
                        </div>
                    </Collapse>
                </div>
                <div style={styles.priceAndButtons}>
                    <h2>Price: $120000.00</h2>
                    <button style={styles.button1} className="btn btn-primary" onClick={goBack}>Go back</button>
                    <button style={styles.button2} className="btn btn-success" onClick={() => handleAddToCart(car)}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}