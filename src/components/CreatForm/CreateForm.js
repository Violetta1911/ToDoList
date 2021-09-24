import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import './CreateForm.scss';

const CreateForm = (task) => {
	return (
		<ul className='task-box'>
			<TaskItem className='task' />
			<TaskItem className='task' />
		</ul>
	);
};

export default CreateForm;
