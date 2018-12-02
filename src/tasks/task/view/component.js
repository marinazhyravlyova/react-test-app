import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style';

class ViewTaskForm extends Component {
    state = {
        isEditMode: false,
    };

    toggleDescriptionVisibility = () => this.setState({isDescriptionVisible: !this.state.isDescriptionVisible});

    render() {
        const { task, onDelete, onEdit } = this.props;
        const { isDescriptionVisible } = this.state;

        return (
            <div className={'task'}>
                <div className={'task-prop-item assigner'}>
                    <div className={'title'}>Assigner</div>
                    <div className={'value'}>{task.assigner}</div>
                </div>
                <div className={'task-prop-item title'}>
                    <div className={'title'}>Title</div>
                    <div className={'value'}>{task.title}</div>
                </div>
                <div className={'task-prop-item deadline'}>
                    <div className={'title'}>Deadline</div>
                    <div className={'value'}>{task.deadline}</div>
                </div>
                {(() => {
                    if (isDescriptionVisible) {
                        return (
                            <div>
                                <div className={'task-prop-item description'}>
                                    <div className={'title'}>Description</div>
                                    <div className={'value'}>{task.description}</div>
                                </div>
                                <button className={'action-item'} onClick={this.toggleDescriptionVisibility}>
                                    Less
                                </button>
                            </div>
                        );
                    }

                    return (
                        <button className={'action-item'} onClick={this.toggleDescriptionVisibility}>
                            More
                        </button>
                    );
                })()}
                <button className={'action-item'} onClick={onEdit}>
                    Edit
                </button>
                <button className={'action-item'} onClick={onDelete}>
                    Delete
                </button>
            </div>
        );
    }
}

export default ViewTaskForm;