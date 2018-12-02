import { connect } from 'react-redux';
import Tasks from './component';
import {
    addTask,
    editTask,
    deleteTask,
} from './actions';

export const mapStateToProps = state => ({
    tasks: state.tasks.taskList,
});

export const mapDispatchToProps = dispatch => ({
    onTaskAdd: (...args) => dispatch(addTask(...args)),
    onTaskEdit: (...args) => dispatch(editTask(...args)),
    onTaskDelete: (...args) => dispatch(deleteTask(...args)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Tasks);