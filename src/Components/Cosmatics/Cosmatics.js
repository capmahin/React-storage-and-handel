import React from 'react';

import Cosmetic from '../Cosmetic/Cosmetic';
// import Cosmatic from '../cosmatic/cosmatic';

;

const Cosmatics = () => {
    const cosmatics = [
        {
          "id": "6237b13ca23cc7707ec351d8",
          "price": 278,
          "name": "Vargas Newton"
        },
        {
          "id": "6237b13c3bb226a898ae430b",
          "price": 216,
          "name": "Vera Rollins"
        },
        {
          "id": "6237b13c704852097787624c",
          "price": 67,
          "name": "Caitlin Bishop"
        },
        {
          "id": "6237b13cc43c6dd85d031298",
          "price": 419,
          "name": "Kathy Mcneil"
        },
        {
          "id": "6237b13c1ecca6ab78011fab",
          "price": 486,
          "name": "Snider Blake"
        },
        {
          "id": "6237b13cd0009e996c7ab49e",
          "price": 210,
          "name": "Penny Holland"
        },
        {
          "id": "6237b13c37a7769a6c1066b3",
          "price": 439,
          "name": "Randolph Kline"
        }
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