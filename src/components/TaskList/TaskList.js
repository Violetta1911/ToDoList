import React from 'react';
import './TaskList.scss';

const TaskList = (props) => <ul className='task-box'>{props.renderTask}</ul>;

export default TaskList;
