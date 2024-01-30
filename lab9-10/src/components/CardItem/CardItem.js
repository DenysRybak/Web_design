import React from "react";
import { Card } from "antd";
import styles from "./CardItem.styled";
import { useNavigate } from "react-router-dom";

const CardItem = ({ id, mark = 'No title.', power, speed,photo, viewButton, }) => {
    const navigate = useNavigate();

    let card = {
        width: 350,
        borderRadius: "20px",
    };

    let image = styles.image;

    if (viewButton == true) {
        card = {
            width: 300,
            borderRadius: "20px",
        };
            image = {
            borderRadius: "10px",
            width: "300px",
            height: "175px",
        };
    }

    const goToItemPage = () => {
        navigate(`/catalog/${id}`);
    };

    return (
        <Card
            hoverable
            style={card}
            cover={<img style={image} alt="example" src={photo} />}
        >
            <div>
                <h2>{mark}</h2>
                <p>Power: {power} hp</p>
                <p>Speed: {speed} km/h</p>
                {viewButton && (
                <div style={styles.button_container}>
                    <button style={styles.button} className="btn btn-primary" onClick={goToItemPage}>
                        <a className="nav-link">View more</a>
                    </button>
                </div>
                )}
            </div>
        </Card>
    );
};

export default CardItem;
