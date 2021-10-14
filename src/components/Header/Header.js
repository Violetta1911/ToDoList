import React from 'react';
import TaskCreation from '../TaskCreation/TaskCreation';
import Title from '../Title/Title';
import './Header.scss';

const Header = ({ onInputTask, onAddTask, taskTitle }) => {
	return (
		<div>
			<Title />
			<TaskCreation
				onInputTask={onInputTask}
				onAddTask={onAddTask}
				taskTitle={taskTitle}
			/>
		</div>
	);
};

export default Header;
