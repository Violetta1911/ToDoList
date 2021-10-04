import React from 'react';
import TaskCreation from '../TaskCreation/TaskCreation';
import Title from '../Title/Title';
import './Header.scss';

const Header = ({ createTask }) => {
	return (
		<div>
			<Title />
			<TaskCreation />
		</div>
	);
};

export default Header;
