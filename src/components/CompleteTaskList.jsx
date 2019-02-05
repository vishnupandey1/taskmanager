import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeTasksRef } from '../firebase';
import { setCompleteTasks } from '../actions';

class CompleteTaskList extends Component {
    componentDidMount() {
        completeTasksRef.on('value', snap => {
            let tasks = [];
            snap.forEach(function (task) {
                const { email, title } = task.val();
                const { key } = task;

                tasks.push({ email, title, key });
            });

            this.props.setCompleteTasks(tasks);
        });
    }

    handleClearAll = () => completeTasksRef.set([]);

    render() {
        const { tasks } = this.props;

        return (
            <div>
                <div style={{margin: '5px'}}>
                    {tasks.map(task => {
                        const { email, title, key } = task;
                        return (
                            <div key={key}>
                                <strong>{title}</strong>
                                <span style={{margin: '5px'}}>
                                    completed by <em>{email}</em>
                                </span>
                            </div>
                        );
                    })}
                </div>
                <button
                    type="type"
                    className="btn btn-sm btn-danger"
                    onClick={this.handleClearAll}
                >
                    Clear All
                </button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { completeTasks } = state;
    return {
        tasks: completeTasks
    };
}

export default connect(mapStateToProps, { setCompleteTasks })(CompleteTaskList);