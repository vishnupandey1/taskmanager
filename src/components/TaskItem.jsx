import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeTasksRef, tasksRef } from '../firebase';

class GoalItem extends Component {
    handleCompleteTask = () => {
        const { email } = this.props.user;
        const { title, key } = this.props.task;

        tasksRef.child(key).remove();
        completeTasksRef.push({ email, title });
    }

    render() {
        const { email, title } = this.props.task;

        return (
            <div style={{margin: '5px'}}>
                <strong>{title}</strong>
                <span
                    style={{margin: '5px'}}
                >
                    Submitted by <em>{email}</em>
                </span>
                <button
                    type="button"
                    className="btn btn-sm btn-primary"
                    onClick={this.handleCompleteTask}
                >
                    Complete
                </button>
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

export default connect(mapStateToProps, null)(GoalItem);
