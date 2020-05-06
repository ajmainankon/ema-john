import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    console.log(cart)
    //const total = cart.reduce( (total, prd) => total+prd.price, 0) 
    let total = 0 
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price 
    }


    let shipping = 0
    if(total> 35){
        shipping = 0
    }
    else if(total>15){
        shipping = 4.99
    }
    else if(total> 0){
        shipping = 12.99
    }

    const tax = Math.round(total*0.1)
    
    
    
    return (
        <div>
            <h1>order summary</h1>
            
                <p>   itms ordered: {cart.length}</p>
    <p><small>shipping cost : {shipping}</small></p>
    <p>total price: {total+shipping}</p>
    <p>tax+VAT : {tax}</p>
           
        </div>
    );
};

export default Cart;