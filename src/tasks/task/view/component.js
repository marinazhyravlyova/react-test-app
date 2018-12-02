import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { defaultBorderColor } from '../../../style';
import {
    ActionPanel,
    AddButton,
    RemoveButton,
    OneLineProperties,
} from '../edit/component';

export const TaskForm = styled.div`
    display: grid;
    grid-template-areas: "OneLineProperties ActionPanel"
                         "Description       ActionPanel";
                         "MoreLess          ActionPanel";
    grid-template-columns: auto auto;
    grid-template-rows: auto;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    border: 1px solid ${defaultBorderColor};
    padding: 5px;
    border-radius: 3px;
`;

export const DescriptionSection = styled.div`
    grid-area: Description;
    min-height: 50px;
    font-size: 18px;
    padding-left: 10px;
    border: 1px solid ${defaultBorderColor};
    word-break: break-all;
`;

export const DescriptionProperty = ({ value }) => <DescriptionSection>{value}</DescriptionSection>;

export const Property = ({ value }) => <Value>{value}</Value>;

export const Value = styled.div`
    display: flex;
    align-items: center;
    min-width: 188px;
    border: 1px solid ${defaultBorderColor};
    padding: 1px 1px 1px 10px;
    overflow: hidden;
    font-size: 18px;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 30px;
`;

export const MoreButton = styled(AddButton)`
    align-self: center;
`;

class ViewTaskForm extends Component {
    state = {
        isEditMode: false,
    };

    toggleDescriptionVisibility = () => this.setState({isDescriptionVisible: !this.state.isDescriptionVisible});

    render() {
        const { task, onDelete, onEdit } = this.props;
        const { isDescriptionVisible } = this.state;

        return (
            <TaskForm>
                <OneLineProperties>
                    <Property title={'Assigner'} value={task.assigner}/>
                    <Property title={'Title'} value={task.title}/>
                    <Property title={'Deadline'} value={task.deadline}/>
                </OneLineProperties>
                <ActionPanel>
                    <AddButton onClick={onEdit}>Edit</AddButton>
                    <RemoveButton onClick={onDelete}>Delete</RemoveButton>
                </ActionPanel>
                { isDescriptionVisible ? <DescriptionProperty value={task.description}/> : null }
                <MoreButton onClick={this.toggleDescriptionVisibility}>
                    { isDescriptionVisible ? 'Less' : 'More' }
                </MoreButton>
            </TaskForm>
        );
    }
}

ViewTaskForm.propTypes = {
    task: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default ViewTaskForm;