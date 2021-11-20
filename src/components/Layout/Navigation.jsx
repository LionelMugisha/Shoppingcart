import React from "react";
import Menu from "../images/bars-solid.svg";
import Close from "../images/times-solid.svg";
import CartPic from "../images/cart-arrow-down-solid.svg";
import { Link } from "react-router-dom";
import '../css/Header.css';

class Header extends React.Component{
    
    state = {
        toggle: false
    }
    menuToggle = () =>{
        this.setState({toggle: !this.state.toggle})
    }

    render(){
        const {toggle} = this.state;
        return(
            <header>
                    <div className="menu" onClick={this.menuToggle}>
                        <img src={Menu} alt="" width="20" />
                    </div>
                    <div className="logo">
                        <h1><Link to="/">Akira</Link></h1>
                    </div>
                    <nav>
                        <ul className={toggle ? "toggle" : ""}>
                            <li><Link to="/">Home</Link></li>
                            <li className="close" onClick={this.menuToggle}>
                                <img src={Close} alt="" width="20" />
                            </li>
                        </ul>
                        <div className="nav-cart">
                            <Link to="/cart">
                                <img src={CartPic} alt="" width="20" />
                            </Link>
                        </div>
                    </nav>
            </header>
        )
    }
}

export default Header;