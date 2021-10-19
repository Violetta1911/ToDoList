import React from 'react';
import './TaskCreation.scss';
import Button from '../Button/Button';

const TaskCreation = ({ onInputTask, taskTitle, onAddTask, placeholder }) => {
	return (
		<div className='add-task-box'>
			<input
				type='text'
				name='task'
				className='task-title'
				placeholder={placeholder}
				onChange={onInputTask}
				value={taskTitle}
			/>
			<Button className='add-task' onClick={onAddTask}>
				+
			</Button>
		</div>
	);
};

export default TaskCreation;
