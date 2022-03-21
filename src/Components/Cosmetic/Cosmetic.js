import React from 'react';
import { addToDb } from '../../utilities/fakedb';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const {name , price , id} = props.cosmatic;
    const addToCart =(id)=>{
        addToDb(id);
    }
    return (
        <div className='product'>
            <h3>Buy Now:{name}</h3>
            <p>Only for:${price}</p>
            <p><small>its has id:{id}</small></p>
            <button onClick={()=>addToCart(id)}>Add to cart</button>
            
        </div>
    );
};

export default Cosmetic;