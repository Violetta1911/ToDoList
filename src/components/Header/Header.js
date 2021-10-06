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
					readTask={this.props.readTask}
					addTask={this.props.addTask}
				/>
			</div>
		);
	}
}

export default Header;
