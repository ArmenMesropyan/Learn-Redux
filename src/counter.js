import React from 'react';

const Counter = ({ counter, inc, dec, rnd }) => (
    <>
        <h1>Simple Counter with Redux!</h1>
        <span id="counter">{ counter }</span>
        <button onClick={inc}>DEC</button>
        <button onClick={dec}>INC</button>
        <button onClick={rnd}>RND</button>
    </>
);

export default Counter;