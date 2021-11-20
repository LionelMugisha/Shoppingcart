import React from "react";
import CartForm from './CartForm';
import './css/main.css';

function Main({cart}){ 
    return (
      <>
        <ul className="products">
            {cart.map((item,id) => (
            <CartForm
                key={id}
                item={item}
            />
            ))}
        </ul>
      </>
    );
  }

  export default Main;