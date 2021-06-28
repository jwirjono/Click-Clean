import React from 'react';
import ReactDOM from 'react-dom';
import AppRoute from './Approute';
import * as serviceWorker from './serviceWorker';
import {createStore} from "redux";
import {Provider} from 'react-redux';

const stateglobal={
  aktif:"sign"
};

const reducer = (state=stateglobal,action)=>{
  switch (action.type) {
    case "ACTIVE_PAGE":
        console.log(action);
        var stateaktif ={...state,aktif:action.aktif}
        return stateaktif;
    default:
      return state;

  }
};

const store = createStore(reducer);


ReactDOM.render(<Provider store={store}> <AppRoute /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
