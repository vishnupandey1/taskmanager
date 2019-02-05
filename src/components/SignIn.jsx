import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firebaseApp } from '../firebase';

class SignIn extends Component {
    state = {
        email: '',
        password: '',
        error: ''
    }

    signIn = () => {
        const { email, password } = this.state;

        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .then(() => this.props.history.push('/'))
            .catch(error => this.setState({error: error.message}));
    }

    render() {
        return (
            <div style={{ margin: '5%'}}>
                <div className="form-inline">
                    <h1> Sign In </h1>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="email"
                            placeholder="Registered Email"
                            onChange={event => this.setState({email: event.target.value})}
                        />
                        <input
                            className="form-control"
                            type="password"
                            placeholder="password"
                            onChange={event => this.setState({password: event.target.value})}
                        />
                        <button
                            className="btn btn-primary"
                            type="button"
                            onClick={this.signIn}
                        > Sign In </button>
                    </div>
                </div>
                <div className="alert-danger" style={{ display: 'inline' }}>{this.state.error}</div>
                <div><Link to="/signup"> Sign Up </Link></div>
            </div>
        );
    }
}

export default SignIn;
