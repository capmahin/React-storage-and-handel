import React from 'react';
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
                cosmatics.map(cosmatic =>console.log(cosmatic))
            }
            
        </div>
    );
};

export default Cosmatics;