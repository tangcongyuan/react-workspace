import React, { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    function incrementCount() {
        setCount(preCount => preCount + 1);
    }

    return (
        <div>
            <button onClick={incrementCount}>+</button>
            <span>{count}</span>
        </div>
    );
}
