import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style';
import { component as Task } from './task';
import { component as EditTaskForm, FORM_NEW_MODE } from './task/edit';

class Tasks extends Component {
    render() {
        const {
            tasks,
            onTaskAdd,
            onTaskEdit,
            onTaskDelete,
        } = this.props;

        return (
            <div className={'tasks'}>
                <EditTaskForm
                    mode={FORM_NEW_MODE}
                    onSave={onTaskAdd}
                />
                <div className={'task-list'}>
                    {(tasks || []).map((task, key) => (
                        <Task
                            key={key}
                            task={task}
                            onEdit={onTaskEdit}
                            onDelete={() => onTaskDelete(task)}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

Tasks.propTypes = {
    tasks: PropTypes.array.isRequired,
    onTaskAdd: PropTypes.func.isRequired,
    onTaskEdit: PropTypes.func.isRequired,
    onTaskDelete: PropTypes.func.isRequired,
};

export default Tasks;