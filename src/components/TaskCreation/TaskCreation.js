import React from 'react';
import './TaskCreation.scss';

const TaskCreation = (props) => {
	return (
		<div className='add-task-box'>
			<input
				type='text'
				name='task'
				id='task'
				placeholder='add new task'
				onChange={props.onInputTask}
				value={props.taskTitle}
			/>
			<button className='add-task' onClick={props.onAddTask}>
				+
			</button>
		</div>
	);
};

export default TaskCreation;
