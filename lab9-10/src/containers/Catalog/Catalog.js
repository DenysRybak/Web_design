import Footer from "../../components/Footer/Footer";
import Layout from "../../components/Layout/Layout";
import Filters from "./Filter";
import Items from "./Items";
import React, {useState, useEffect } from "react";
import {RingLoader} from 'react-spinners'

export default function Catalog () {
    const [inputValue, setInputValue] = useState('');
    const [showSpinner, setShowSpinner] = useState(true);
    const [filteredBy, setFilteredBy] = useState('');

    const handleInputValueChange = (value) => {
        setInputValue(value);
    };

    const onFilterChange = (value) => {
        setFilteredBy(value);
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
        setShowSpinner(false);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

    return (
    <div>
        {showSpinner ? (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: "100vh"
            }}>
                <RingLoader color="#3e2323" size={150} loading={true} />
            </div>
        ) : (
            <>
                <Layout searchLine="true" onInputValueChange={handleInputValueChange} />
                <Filters onFilterChange={onFilterChange}/>
                <Items inputValue={inputValue} filteredBy={filteredBy}/>
                <Footer />
            </>
        )}
    </div>
    );
}