import React from 'react';
import './TaskCreationForm.scss';

const TaskCreationForm = ({ showTask }) => (
	<form className='task-box'>{showTask}</form>
);

export default TaskCreationForm;
