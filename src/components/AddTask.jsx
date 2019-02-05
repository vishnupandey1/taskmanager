import React, { Component } from 'react';
import { tasksRef } from '../firebase';
import { connect } from 'react-redux';

class AddTask extends Component {
    state = {
        title: ''
    };

    handleOnChange = event => {
        this.setState({title: event.target.value});
    }

    addTask = () => {
        const { title } = this.state;
        const { email } = this.props.user;

        tasksRef.push({email, title});
    }

    render () {
        return (
            <div className="form-inline">
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Add Task"
                        className="form-control"
                        style={{marginRight: '5px'}}
                        onChange={this.handleOnChange}
                    />
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={this.addTask}
                    >
                        Submit
                    </button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { user } = state;

    return {
        user
    };
}

export default connect(mapStateToProps, null)(AddTask);