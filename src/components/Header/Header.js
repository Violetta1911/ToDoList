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
					onReadTask={this.props.readTask}
					onAddTask={this.props.addTask}
				/>
			</div>
		);
	}
}

export default Header;
