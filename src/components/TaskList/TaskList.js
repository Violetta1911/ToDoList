import React from 'react';
import './TaskList.scss';

const TaskList = ({ renderTask }) => <ul className='task-box'>{renderTask}</ul>;

export default TaskList;
