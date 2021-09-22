import React from 'react';
import Title from './Title';

const Header = () => {
	return (
		<div>
			<Title />
			<div className='add-task-box'>
				<input type='text' name='task' id='task' placeholder='add new task' />
				<button className='add-task'>+</button>
			</div>
		</div>
	);
};

export default Header;
