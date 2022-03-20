import React from 'react';

import Cosmetic from '../Cosmetic/Cosmetic';
// import Cosmatic from '../cosmatic/cosmatic';

;

const Cosmatics = () => {
    const cosmatics = [
        {id:1, name:'alta', price:100},
        {id:2, name:'palis', price:200},
        {id:3, name:'malis', price:300},
        {id:4, name:'balis', price:400},
        {id:5, name:'nalis', price:500},
    ]
    return (
        <div>
            <h1>This is my cosmatic website

            </h1>
            {
                cosmatics.map(cosmatic => <Cosmetic key={cosmatic.id} cosmatic={cosmatic} ></Cosmetic>)
            }
            
        </div>
    );
};

export default Cosmatics;