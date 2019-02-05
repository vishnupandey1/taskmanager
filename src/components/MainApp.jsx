import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App';
import SignIn from './SignIn';
import SignUp from './SignUp';

function MainApp () {
    return (
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
        </Switch>
    );
}

export default MainApp;
