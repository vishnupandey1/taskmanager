import React, { Component } from 'react';
import { tasksRef } from '../firebase';
import { connect } from 'react-redux';
import { setTasks } from '../actions';
import GoalItem from './TaskItem';

class TaskList extends Component {
    componentDidMount() {
        tasksRef.on('value', snap => {
            let tasks = [];
            snap.forEach(task => {
                const { email, title } = task.val();
                const { key } = task;

                tasks.push({ email, title, key });
            });

            this.props.setTasks(tasks);
        });
    }

    render() {
        return (
            <div>
                {this.props.tasks.map((task, index) =>
                    <GoalItem key={index} task={task} />
                )}
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { tasks } = state;

    return {
        tasks
    }
}

export default connect(mapStateToProps, { setTasks })(TaskList);
