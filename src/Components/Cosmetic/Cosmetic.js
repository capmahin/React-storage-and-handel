import React from 'react';

const Cosmetic = (props) => {
    const {name , price , id} = props.cosmatic;
    return (
        <div>
            <h3>Buy Now:{name}</h3>
            <p>Only for:${price}</p>
            <p><small>its has id:{id}</small></p>
        </div>
    );
};

export default Cosmetic;