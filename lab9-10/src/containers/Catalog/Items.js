import React, { useEffect, useState } from "react";
import styles from "./Items.styled";
import { getAllCars } from "../../API/api";
import CardItem from "../../components/CardItem/CardItem";

export default function Items(props) {
    const [filteredCars, setFilteredCars] = useState([]);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await getAllCars();
                let sortedCars = [...response.data];

                if (props.filteredBy === "power") {
                    sortedCars.sort((a, b) => a.power - b.power);
                }
                else if (props.filteredBy === "speed") {
                    sortedCars.sort((a, b) => a.speed - b.speed);
                }

                if (props.inputValue) {
                    const filtered = response.data.filter(car => car.mark.toLowerCase().includes(props.inputValue.toLowerCase()));
                    setFilteredCars(filtered);
                } else {
                    setFilteredCars(sortedCars);
                }
            } catch (error) {
                console.error("Помилка завантаження даних про авто:", error);
            }
        };

        fetchCars();
    }, [props.inputValue, props.filteredBy]);

    return (
        <div className="container">
            <div style={styles.cardWrapper}>
                {filteredCars.map(car => (
                    <CardItem
                        id={car.id}
                        mark={car.mark}
                        power={car.power}
                        speed={car.speed}
                        photo={car.urlPhoto}
                        viewButton={true}
                        key={car.id}
                    />
                ))}
            </div>
        </div>
    );
}
