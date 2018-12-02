import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style';
import { FORM_EDIT_MODE } from './index';

export const initialState = {
    title: '',
    description: '',
    deadline: '',
    assigner: '',
};

class NewTaskForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ...initialState,
            ...props.task,
        };
    }

    onPropChange = (event, propName) => this.setState({ [propName]: event.target.value });

    onSave = () => {
        this.setState(initialState);

        this.props.onSave({ ...this.state });
    };

    render() {
        const { mode = 'edit', onDelete } = this.props;
        const {
            title,
            description,
            deadline,
            assigner,
        } = this.state;

        return (
            <div className={'new-task-form'}>
                <div className={'task'}>
                    <div className={'task-prop-item assigner'}>
                        <div className={'title'}>Assigner</div>
                        <input value={assigner} onChange={(e) => this.onPropChange(e, 'assigner')}/>
                    </div>
                    <div className={'task-prop-item title'}>
                        <div className={'title'}>Title</div>
                        <input value={title} onChange={(e) => this.onPropChange(e, 'title')}/>
                    </div>
                    <div className={'task-prop-item deadline'}>
                        <div className={'title'}>Deadline</div>
                        <input value={deadline} onChange={(e) => this.onPropChange(e, 'deadline')}/>
                    </div>
                    <div className={'task-prop-item deadline'}>
                        <div className={'title'}>Description</div>
                        <input value={description} onChange={(e) => this.onPropChange(e, 'description')}/>
                    </div>
                    <button className={'action-item'} onClick={this.onSave}>{ mode === FORM_EDIT_MODE ? 'Save' : 'Add' }</button>
                    { mode === FORM_EDIT_MODE ? <button className={'action-item'} onClick={onDelete}>Delete</button> : null }
                </div>
            </div>
        );
    }
}

export default NewTaskForm;