import React, { useContext } from 'react';
import { CartContext } from "../components/context/CartContext";
import '../components/css/cart.css';

const Cart = () => {
    const { cartItems,handleAddProduct,handleRemoveProduct, handleClearCart } = useContext(CartContext);
    const totalPrice = cartItems.reduce((price,item) => price + item.quantity * item.price, 0); 
    return (
        <div className="border border-gray-200 lg:max-w-4xl md:max-w-lg shadow-lg sm:ml-6 md:ml-32 sm:pl-2 lg:pl-5 lg:ml-48">
            <div className="cart-items">
                <h3 className="cart-items-header">Cart Items</h3>
                <div className="clear-cart">
                    {cartItems.length >= 1 && (
                        <button className="clear-cart-button" onClick={handleClearCart}>Clear cart</button>
                    )}
                </div>
                {cartItems.length === 0 && (
                    <div className="cart-items-empty">No items are addded.</div>
                )}
                <div>
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-items-list">
                            <img 
                                className="cart-items-image"
                                src={item.image}
                                alt={item.title}
                            />
                            <div className="">
                            <div className="cart-items.name">{item.title}</div>
                            <div className="mt-1 font-bold">{item.category}</div>
                            </div>
                            <div className="cart-items-function">
                                <button className="cart-items-add"  onClick={()=>handleAddProduct(item)}>+</button>
                                <button className="cart-items-remove"  onClick={()=>handleRemoveProduct(item)}>-</button>
                            </div>
                            <div className="cart-items-price">
                                {item.quantity} * ${item.price}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="cart-items-total-price-name">
                    Total Price
                    <div className="cart-items-total-price">${totalPrice}</div>
                </div>
        </div>
    </div>
    )
}

export default Cart;