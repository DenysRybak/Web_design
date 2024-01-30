import React from "react";
import Layout from "../../components/Layout/Layout";
import Footer from "../../components/Footer/Footer";
import ShoppingCart from './ShoppingCart';

export default function CardPage() {
    return (
        <div>
            <Layout/>
            <ShoppingCart/>
            <Footer/>
        </div>
    );
}