import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FORM_EDIT_MODE } from './index';
import { Button, defaultBorderColor } from '../../../style';

export const inputBorderColor = 'rgba(0, 0, 0, 0.2)';

export const TaskForm = styled.div`
    display: grid;
    grid-template-areas: "OneLineProperties ActionPanel"
                         "Description       ActionPanel";
    grid-template-columns: auto auto;
    grid-template-rows: auto;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    border: 1px solid ${defaultBorderColor};
    padding: 5px;
    border-radius: 3px;
`;

export const AddButton = styled(Button)`
    border-color: #3096DF;
    :hover {
       background-color: #3096DF;  
    }
`;

export const RemoveButton = styled(Button)`
    border-color: #DF3056;
    :hover {
       background-color: #DF3056;
    }
`;

export const CancelButton = styled(Button)``;

export const Input = styled.input`
    outline: none;
    border: 1px solid ${inputBorderColor};
    padding: 1px 1px 1px 10px;
    font-size: 18px;
    padding-left: 10px;
    height: 30px;
`;

export const DescriptionTextArea = styled.textarea`
    outline: none;
    grid-area: Description;
    border: 1px solid ${inputBorderColor};
    padding: 1px 1px 1px 10px;
    min-height: 50px;
    font-size: 18px;
    padding-left: 10px;
`;

export const Property = ({ title, value, onChange }) => (
    <Input placeholder={title} value={value} onChange={onChange}/>
);

export const Description = ({ title, value, onChange }) => (
    <DescriptionTextArea placeholder={title} value={value} onChange={onChange}/>
);

export const ActionPanel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-area: ActionPanel;
    border-left: 1px solid ${defaultBorderColor};
    padding-left: 5px;
`;

export const OneLineProperties = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-column-gap: 10px;
    grid-area: OneLineProperties;
`;

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
        const { mode = FORM_EDIT_MODE, onDelete, onCancel } = this.props;
        const {
            title,
            description,
            deadline,
            assigner,
        } = this.state;

        return (
            <TaskForm>
                <OneLineProperties>
                    <Property title={'Assigner'} value={assigner} onChange={(e) => this.onPropChange(e, 'assigner')}/>
                    <Property title={'Title'} value={title} onChange={(e) => this.onPropChange(e, 'title')}/>
                    <Property title={'Deadline'} value={deadline} onChange={(e) => this.onPropChange(e, 'deadline')}/>
                </OneLineProperties>
                <Description title={'Description'} value={description} onChange={(e) => this.onPropChange(e, 'description')}/>
                <ActionPanel>
                    <AddButton onClick={this.onSave}>{ mode === FORM_EDIT_MODE ? 'Save' : 'Add' }</AddButton>
                    { mode === FORM_EDIT_MODE ? <RemoveButton onClick={onDelete}>Delete</RemoveButton> : null }
                    { mode === FORM_EDIT_MODE ? <CancelButton onClick={onCancel}>Cancel</CancelButton> : null }
                </ActionPanel>
            </TaskForm>
        );
    }
}

NewTaskForm.propTypes = {
    mode: PropTypes.string,
    task: PropTypes.object,
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func,
    onDelete: PropTypes.func,
};

export default NewTaskForm;