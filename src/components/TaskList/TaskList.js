import React from 'react';
import './TaskList.scss';
import TaskItem from '../TaskItem/TaskItem';

const TaskList = ({
	tasks,
	onRemoveTask,
	onToggleTask,
	onConfirmChanging,
	onChangeTitle,
	changeBtn,
}) => {
	return (
		<ul className='task-box'>
			{tasks.map((task) => {
				return (
					<TaskItem
						key={task.id}
						task={task}
						onRemoveTask={() => onRemoveTask(task.id)}
						onConfirmChanging={() => onConfirmChanging(task.id)}
						onChangeTitle={(event) => onChangeTitle(event, task.id)}
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
