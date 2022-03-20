import React from 'react';
import { add, multiply } from '../../utilities/Calculate';

const Shoe = () => {
    const first = 20;
    const second = 30;
    const result = multiply(first , second);
    const sum  = add(first , second);
    return (
        <div>
            <h1>This is Shoe</h1>
            <p>result: {result} and sum: {sum}</p>
        </div>
    );
};

export default Shoe;