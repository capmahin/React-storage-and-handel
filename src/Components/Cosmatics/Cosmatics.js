import React, { useEffect, useState } from 'react';

import Cosmetic from '../Cosmetic/Cosmetic';
// import Cosmatic from '../cosmatic/cosmatic';

;

const Cosmatics = () => {
    const [ cosmatics, setcosmatics] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setcosmatics(data))


    },[])
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