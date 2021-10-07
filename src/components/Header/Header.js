import React from 'react';
import TaskCreation from '../TaskCreation/TaskCreation';
import Title from '../Title/Title';
import './Header.scss';

class Header extends React.Component {
	render() {
		return (
			<div>
				<Title />
				<TaskCreation
					onChangeTask={this.props.onChangeTask}
					onAddTask={this.props.onAddTask}
					newTaskItem={this.props.newTaskItem}
				/>
			</div>
		);
	}
}

export default Header;
