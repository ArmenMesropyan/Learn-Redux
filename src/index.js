import { createStore } from 'redux';
import { inc, dec, rnd } from './actions';
import reducer from './reducer';

const store = createStore(reducer);
const { dispatch } = store;

const bindActionCreater = (action, dispatch) => (...args) => dispatch(action(...args));

const incDispatch = bindActionCreater(inc, dispatch);
const decDispatch = bindActionCreater(dec, dispatch);
const rndDispatch = bindActionCreater(rnd, dispatch);

document.getElementById('inc').addEventListener('click', incDispatch);

document.getElementById('dec').addEventListener('click', decDispatch);

document.getElementById('rnd').addEventListener('click', () => {
    const value = Math.floor(Math.random() * 10);
    rndDispatch(value);
});

store.subscribe(() => {
    document.getElementById('counter').innerHTML = store.getState();
});