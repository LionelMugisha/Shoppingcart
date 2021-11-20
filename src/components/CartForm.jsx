import React, { useContext } from "react";
import { CartContext } from './context/CartContext';

const CartForm = (props) => {
    const { handleAddProduct } = useContext(CartContext);
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg mt-3">
        <img className="max-w-sm h-64" src={props.item.image} alt={props.item.title} />
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.item.title}</div>
        <p className="text-gray-700 text-base">
        {props.item.description}
        </p>
        </div>
        <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Price: ${props.item.price}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.item.category}</span>
        </div>
        <div className="md:flex md:items-center mb-5">
            <div className="lg:w-full md:max-w-md">
                <button className="shadow bg-gray-700 ml-6 hover:bg-gray-900 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-16 rounded" 
                type="submit"
                onClick={() => handleAddProduct(props.item)}
                >
                    Add To Cart
                </button>
            </div>
        </div>
    </div>
    );
  };
  
  export default CartForm;
  