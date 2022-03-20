import React from 'react';
import { add } from '../../utilities/Calculate';
// import add from '../../utilities/Calculate';

const Cosmatics = () => {
    const first = 55;
    const second = 44;
    const total = add(first , second);
    return (
        <div>
            <h1>This is my cosmatic website

            </h1>
            <p>total: {total}</p>
        </div>
    );
};

export default Cosmatics;