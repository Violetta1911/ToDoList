import React from 'react';
import './TaskList.scss';
import TaskItem from '../TaskItem/TaskItem';

const TaskList = ({
	tasks,
	onRemoveTask,
	onCheckedTask,
	onChangeTask,
	onNotCheckedTask,
}) => {
	return (
		<ul className='task-box'>
			{tasks.map((task, key) => {
				return (
					<TaskItem
						key={key}
						index={key}
						task={task.title}
						onRemoveTask={(event) => onRemoveTask(task.id, event)}
						onChangeTask={(event) => onChangeTask(task.id, event)}
						onCheckedTask={() => {
							onCheckedTask(task.id);
						}}
						onNotCheckedTask={() => {
							onNotCheckedTask(task.id);
						}}
					/>
				);
			})}
		</ul>
	);
};

export default TaskList;
