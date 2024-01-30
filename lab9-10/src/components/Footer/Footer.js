import React from "react";
import styles from "./Footer.styled"
import CarsLogo from "../../Icons/disney_logo.webp"
import { FacebookOutlined,TwitterOutlined,LinkedinOutlined } from "@ant-design/icons";

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h2>Детальна інформація</h2>
                        <p>А за детальною інформацією ви можете звернутися за такими посиланнями</p>
                    </div>
                    <div style={styles.verticalAlignCenter} className="col-md-4">
                        <div className="d-flex justify-content-between">
                            <a href="#"> 
                                <FacebookOutlined style={{color: 'blue'}}/>
                            </a>
                            <a href="#">
                                <TwitterOutlined style={{color: 'blue'}}/>
                            </a>
                            <a href="#">
                                <LinkedinOutlined style={{color: 'blue'}}/>
                            </a>
                        </div>
                    </div>
                </div>
                <hr />
                <p className="text-center">
                    2023 IoT © Copyright all rights reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;