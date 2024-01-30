import React, {useState, useEffect} from "react";
import CarsLogo from "../../Icons/disney_logo.webp";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import styles from './Layout.styled';
import {
    useNavigate,
} from "react-router-dom";

const Layout = (props) => {

    const [inputValue, setInputValue] = useState('');

    const navigate = useNavigate();

    const catalogPage = () => {
        navigate('/catalog');
    }

    const homePage = () => {
        navigate('/')
    }

    const cartPage = () => {
        navigate('/cart');
    }

    useEffect(() => {
        function handleEnterPress(event) {
            if (event.key === 'Enter') {
                setInputValue(event.target.value);
                props.onInputValueChange(event.target.value);
                setInputValue("");
            }
        }

        window.addEventListener('keydown', handleEnterPress);

        return () => {
            window.removeEventListener('keydown', handleEnterPress);
        };
    }, [inputValue]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    return (
        <header className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                
              
                <ul className="navbar-nav mx-auto">
                    <li style={styles.navLink} className="nav-item">
                        <button className="nav-link" onClick={homePage}>Home</button>
                    </li>
                    <li style={styles.navLink} className="nav-item">
                        <button className="nav-link" onClick={catalogPage}>Catalog</button>
                    </li>
                    <li style={styles.navLink}  className="nav-item">
                        <button className="nav-link" onClick={cartPage}>Cart</button>
                    </li>
                </ul>
                {props.searchLine && (
                    <div className="search-box">
                        <input 
                            id="search" 
                            type="text" 
                            placeholder="Пошук..." 
                            style={{borderRadius: '10px'}}
                            value={inputValue}
                            onChange={handleInputChange}
                        />
                    </div>
                )}
            </div>
        </header>
    );
}

export default Layout