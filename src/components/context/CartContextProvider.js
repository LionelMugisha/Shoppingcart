import { useState } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";
import shoes1 from "../images/1.jpg"
import shoes2 from "../images/2.jpg"
import shoes3 from "../images/3.jpg"
import shoes4 from "../images/4.jpg"
import shoes5 from "../images/5.jpg"
import shoes6 from "../images/6.jpg"
import shoes7 from "../images/7.jpg"
import shoes8 from "../images/8.jpg"
import shoes9 from "../images/9.jpg"

const CartContextProvider = (props) => {

    const productItems = [
        {
            "id": "1",
            "title": "Nike Shoes",
            "image": shoes1,
            "description": "Smooth, comfortable and better for sport",
            "price": 25,
            "category": "Male"
        },
        {
            "id": "2",
            "title": "New Balance",
            "image": shoes2,
            "description": "Smooth, comfortable and better for sport",
            "price": 26,
            "category": "Male"
        },
        {
            "id": "3",
            "title": "Oxford Shoes",
            "image": shoes3,
            "description": "Plain, formal shoes, made of leather",
            "price": 25,
            "category": "Male"
        },
        {
            "id": "4",
            "title": "Nike Shoes",
            "image": shoes4,
            "description": "Air Max was conceptualized by Tinker Hatfield",
            "price": 35,
            "category": "Male"
        },
        {
            "id": "5",
            "title": "Nike Shoes",
            "image": shoes5,
            "description": "stretched leather material ,paired with matte suede",
            "price": 19,
            "category": "Male"
        },
        {
            "id": "6",
            "title": "Jordan Shoes",
            "image": shoes6,
            "description": "Jordan, all without compromising athletic performance",
            "price": 48,
            "category": "Male"
        },
        {
            "id": "7",
            "title": "New Balance",
            "image": shoes7,
            "description": "comfort, quality, support, cushioning, and stability",
            "price": 22,
            "category": "Female"
        },
        {
            "id": "8",
            "title": "New Balance",
            "image": shoes8,
            "description": "The running shoes of the 1970s might best be described as deceptively simple",
            "price": 23,
            "category": "Female"
        },
        {
            "id": "9",
            "title": "All Star Shoes",
            "image": shoes9,
            "description": "the All Star's rubber sole, smooth rounded toe, and wrap-around strip.",
            "price": 25,
            "category": "Male"
        }
    ];

    const [cart, setCart] = useState(productItems);

    const [cartItems, setCartItems] = useState([]);
    
    const navigate = useNavigate();

    const addItem = (item) => {
        setCart([...cart,item]);
        navigate('/');
    }

    const handleAddProduct = (product) => {
        const productExist = cartItems.find((item) => item.id === product.id)
        if(productExist){
            setCartItems(cartItems.map((item) => item.id === product.id ? 
            {...productExist, quantity:productExist.quantity + 1}: item)
            );
        } else {
            setCartItems([...cartItems, {...product, quantity: 1 }]);
        }
    }

    const handleRemoveProduct = (product) => {
        const productExist = cartItems.find((item) => item.id === product.id)
        if(productExist.quantity === 1){
            setCartItems(cartItems.filter((item) => item.id !== product.id));
        } else {
            setCartItems(
                cartItems.map((item) => item.id === product.id ? {...productExist, quantity: productExist.quantity - 1 } : item )
            );
        }
    }
    const handleClearCart = () => {
        setCartItems([]);
    }
    const value = {
        cart,
        setCart,
        cartItems,
        setCartItems,
        addItem,
        handleAddProduct,
        handleRemoveProduct,
        handleClearCart
    };

  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
};

export default CartContextProvider;
