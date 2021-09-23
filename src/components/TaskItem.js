import React from 'react';
import ButtonClose from './ButtonClose';
import ButtonEdit from './ButtonEdit';

const TaskItem = () => {
	return (
		<div>
			<li className='task'>
				<div className='check-box'>
					<input type='checkbox' className='check' />
					<span> read book</span>
				</div>

				<div className='actions'>
					<ButtonEdit />
					<ButtonClose />
				</div>
			</li>
		</div>
	);
};

export default TaskItem;
