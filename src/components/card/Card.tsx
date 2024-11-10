import Order from '../order/Order'
import './Card.css'
import React from "react";
import ReactDOM from "react-dom";

export default function Card({title, description, stock, price, currency, imgUrl }){
    function addToOrder(title, price, currency){
        const product = [
            title,
            price,
            currency    
        ]

        console.log("Add");
    }
    
    return(
        <>
            <div className="card">
                <figure>
                    <img src={imgUrl} alt="Product" />
                </figure>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className='info-product'>
                    <span className='stock'>Stock: {stock}</span>
                    <span className='price'>{price} {currency}</span>
                </div>
                <button onClick={() => addToOrder({title}, {price}, {currency})}>Add product</button>
            </div>
        </>
    )
}