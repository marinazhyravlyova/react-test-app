import React, {Component} from 'react';
import PropTypes from 'prop-types';
import style from './style';
import { component as EditTaskForm } from './edit';
import { component as ViewTaskForm } from './view';

class Task extends Component {
    state = {
        isEditMode: false,
    };

    startEditMode = () => this.setState({isEditMode: true});

    stopEditMode = () => this.setState({isEditMode: false});

    onSave = (task) => {
        this.stopEditMode();
        this.props.onEdit(task);
    };

    render() {
        const { task, onDelete } = this.props;
        const { isEditMode } = this.state;

        if (isEditMode) {
            return (
                <EditTaskForm
                    task={task}
                    onSave={this.onSave}
                    onDelete={onDelete}
                />
            );
        }

        return (
            <ViewTaskForm
                task={task}
                onEdit={this.startEditMode}
                onDelete={onDelete}
            />
        );
    }
}

Task.propTypes = {
    task: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default Task;