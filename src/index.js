import { createStore } from 'redux';
import { inc, dec, rnd } from './actions';
import reducer from './reducer';

const store = createStore(reducer);
const { dispatch } = store;

document.getElementById('inc').addEventListener('click', () => dispatch(inc()));

document.getElementById('dec').addEventListener('click', () => dispatch(dec()));

document.getElementById('rnd').addEventListener('click', () => {
    dispatch(rnd(Math.floor(Math.random() * 10)));
});

store.subscribe(() => {
    document.getElementById('counter').innerHTML = store.getState();
});