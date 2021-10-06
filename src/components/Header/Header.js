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
					handleChange={this.props.handleChange}
					addTask={this.props.addTask}
				/>
			</div>
		);
	}
}

export default Header;
