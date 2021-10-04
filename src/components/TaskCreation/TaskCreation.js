import React from 'react';
import './TaskCreation.scss';

const TaskCreation = (createTask) => {
	return (
		<div className='add-task-box'>
			<input type='text' name='task' id='task' placeholder='add new task' />
			<button className='add-task' onClick={createTask}>
				+
			</button>
		</div>
	);
};

export default TaskCreation;
