import React from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

const Counter = ({ counter, inc, dec, rnd }) => (
    <>
        <h1>Simple Counter with Redux!</h1>
        <span id="counter">{ counter || 0 }</span>
        <button onClick={dec}>DEC</button>
        <button onClick={inc}>INC</button>
        <button onClick={rnd}>RND</button>
    </>
);

const mapStateToProps = (state) => {
    return {
        counter: state,
    }
}

export default connect(mapStateToProps, actions)(Counter);