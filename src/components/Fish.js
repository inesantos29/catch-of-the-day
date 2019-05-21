import React, {Component} from "react";
import {formatPrice} from "../helpers";


class Fish extends Component{
    render(){
        const {image, name, price, desc, status } = this.props.details;

        return (
            <li className="menu-fish">
                <img src={image} alt={name}/>
                <h3 className="fish-name">
                    {name}
                    <span className="price">{formatPrice(price)}</span>
                    <p>{desc}</p>
                    <button>Add To Cart</button>
                </h3>
            </li>
        );
    }
}

export default Fish;