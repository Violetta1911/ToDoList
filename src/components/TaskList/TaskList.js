import React from 'react';
import './TaskList.scss';
import TaskItem from '../TaskItem/TaskItem';

const TaskList = ({
	tasks,
	onRemoveTask,
	onToggleTask,
	onChangeTask,

	changeBtn,
}) => {
	return (
		<ul className='task-box'>
			{tasks.map((task, key) => {
				return (
					<TaskItem
						key={key}
						task={task}
						onRemoveTask={(event) => onRemoveTask(event, task.id)}
						onChangeTask={(event) => onChangeTask(event, task.id)}
						onToggleTask={() => {
							onToggleTask(task.id);
						}}
						changeBtn={changeBtn}
					/>
				);
			})}
		</ul>
	);
};

export default TaskList;
