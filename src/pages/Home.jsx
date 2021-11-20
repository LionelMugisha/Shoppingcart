import React, { useContext } from 'react';
import Main from '../components/MainComponent';
import '../index.css';
import { CartContext } from "../components/context/CartContext";

const Home = () => {
    const { cart,handleAddProduct } = useContext(CartContext);
    return (
        <div className="border border-gray-200 lg:max-w-4xl md:max-w-lg shadow-lg sm:ml-6 md:ml-32 sm:pl-2 lg:pl-5 lg:ml-48">
            <Main cart={cart} handleAddProduct={handleAddProduct} />
        </div>
    )
}

export default Home;