import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import { connect } from 'react-redux';
import AddTask from './AddTask';
import TaskList from './TaskList';
import CompleteTaskList from './CompleteTaskList';

class App extends Component {
    signOutUser = () => {
        firebaseApp.auth().signOut().then(() => {
            this.props.history.push({pathname: '/signin'});
        }).catch(function (error) {

        });
    }

    render() {
        return (
            <div style={{margin: '5px'}}>
                <h3>Task Manager</h3>
                <AddTask />
                <hr />
                <h4> Tasks </h4>
                <TaskList />
                <hr />
                <h4>Completed Tasks</h4>
                <CompleteTaskList />
                <hr />
                <div>
                    <button
                        className="btn btn-danger"
                        type="button"
                        onClick={this.signOutUser}
                    >
                        Sign Out
                    </button>
                </div>
                <div>{ this.props.user.email }</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { user } = state;

    return {
        user
    }
}

export default connect(mapStateToProps, null)(App);