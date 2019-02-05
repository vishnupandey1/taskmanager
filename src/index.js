import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/MainApp';
import { firebaseApp } from './firebase';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import { logUser } from './actions';

const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
    if (user) {
        store.dispatch(logUser(user.email));
        console.log('user has signed in or up', user);
    } else {
        console.log('user has signed out or still need to sign up');
    }
});

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root')
);
