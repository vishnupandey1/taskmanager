import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firebaseApp } from '../firebase';

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        error: ''
    }

    signUp = () => {
        const { email, password } = this.state;

        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .catch(error => this.setState({error: error.message}));
    }

    render() {
        return (
            <div>
                <div className="form-inline" style={{ marginTop: '5%' }}>
                    <h1> Sign Up </h1>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="email"
                            placeholder="email"
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
                            onClick={this.signUp}
                        > Sign Up </button>
                    </div>
                </div>
                <div className="alert-danger" style={{ display: 'inline' }}> {this.state.error} </div>
                <div><Link to="/signin"> Already Registered? Sign In </Link></div>
            </div>
        );
    }
}

export default SignUp;
