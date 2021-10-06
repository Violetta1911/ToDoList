import React from 'react';
import './TaskList.scss';
import TaskItem from '../TaskItem/TaskItem';

class TaskList extends React.Component {
	render() {
		return (
			<ul className='task-box'>
				{Object.keys(this.props.tasks).map((key) => {
					return (
						<TaskItem
							key={key}
							index={key}
							task={this.props.tasks[key].title}
						/>
					);
				})}
			</ul>
		);
	}
}

export default TaskList;
