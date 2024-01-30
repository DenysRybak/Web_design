import React from "react";
import BlueCar from "../../../Icons/blue_car.jpg"
import styles from "./Home.styled"
import Ferrari from "../../../Icons/Ferrari.webp"
import Buggati from "../../../Icons/Buggati.webp"
import RolseRoys from "../../../Icons/RolseRoys.webp"
import CardItem from "../../../components/CardItem/CardItem";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState, useEffect } from "react";
import { getAllCars } from "../../../API/api";
import iphone from "../../../Icons/iphone.jpg"
import door from "../../../Icons/doors.jpg"
import bosh from "../../../Icons/WachingBosh.jpg"

const bonusData = [
    {
        mark: "Ipone 15 Pro",
        power: 3.1,
        image: iphone,
        speed: 4000,
    },
    {
        mark: "Двері вхідні",
        power: 1500,
        image: door,
        speed: 400,
    },
    {
        mark: "Пральна машина Bosh",
        power: 400,
        image: bosh,
        speed: 5000,
    },
]

const Home = () => {

    const [isViewMoreOpened, setIsViewMoreOpened] = useState(false);
    const [isShowed, setIsShowed] = useState(false);
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await getAllCars();
                setCars(response.data);
            } catch (error) {
                console.error("Помилка завантаження даних:", error);
            }
        };

        fetchCars();
    }, []);

    const viewMore = () => {
        setIsViewMoreOpened((prevIsViewMoreOpened) => !prevIsViewMoreOpened);
        setIsShowed(!isShowed);
    }

    return (
        <div className="container">
            <div style={styles.container} className="row">
                <div className="col-md-6">
                    <img style={styles.img}
                        src={BlueCar}
                        alt="Зображення"
                        className="img-fluid"
                    />
                    </div>
                    <div className="col-md-6">
                    <h2 style={styles.textHeader}>Магазин буд матеріалів та техніки</h2>
                    <p style={styles.text}>
                        Ми пропонуємо всі будівельні матеріали для дому,техніку
                        меблі,канцтовари,та інші товари для дому
                    </p>
                </div>
            </div>
            <div style={styles.cardWrapper}>
                {cars.map(car => (
                    <CardItem
                        key={car.id}
                        mark={car.mark}
                        power={car.power}
                        photo={car.urlPhoto}
                        speed={car.speed}
                        id={car.id}
                    />
                ))}
            </div>
            {isViewMoreOpened && (
                <div style={styles.cardWrapper}>
                    {bonusData.map(({ mark, power, image, speed }, idx) => (
                        <CardItem
                            key={idx}
                            mark={mark}
                            power={power}
                            photo={image}
                            speed={speed}
                            id={idx}
                        />
                    ))}
                </div>
            )}
            <div style={styles.button_container}>
                {isShowed && (
                    <button style={styles.button} className="btn btn-primary" onClick={viewMore}>
                        Dismiss
                    </button>
                )}
                {isShowed===false && (
                    <button style={styles.button} className="btn btn-primary" onClick={viewMore}>
                        View more
                    </button>
                )
                }
            </div>
        </div>
    );
}

export default Home