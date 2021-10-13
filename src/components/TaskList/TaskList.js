import React from 'react';
import './TaskList.scss';
import TaskItem from '../TaskItem/TaskItem';

class TaskList extends React.Component {
	render() {
		return (
			<ul className='task-box'>
				{this.props.tasks.map((task, key) => {
					return (
						<TaskItem
							key={key}
							index={key}
							task={task.title}
							onRemoveTask={(event) => this.props.onRemoveTask(task.id, event)}
						/>
					);
				})}
			</ul>
		);
	}
}

export default TaskList;
