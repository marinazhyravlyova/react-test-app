import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { component as Task } from './task';
import { component as EditTaskForm, FORM_NEW_MODE } from './task/edit';

export const TasksForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 50px;
`;
export const TasksList = styled.div`
    display: grid;
    grid-template-rows: auto;
    grid-row-gap: 10px;
    margin-top: 10px;
    width: 757px;
`;

class Tasks extends Component {
    render() {
        const {
            tasks,
            onTaskAdd,
            onTaskEdit,
            onTaskDelete,
        } = this.props;

        return (
            <TasksForm>
                <EditTaskForm
                    mode={FORM_NEW_MODE}
                    onSave={onTaskAdd}
                />
                <TasksList>
                    {(tasks || []).map((task, key) => (
                        <Task
                            key={key}
                            task={task}
                            onEdit={onTaskEdit}
                            onDelete={() => onTaskDelete(task)}
                        />
                    ))}
                </TasksList>
            </TasksForm>
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