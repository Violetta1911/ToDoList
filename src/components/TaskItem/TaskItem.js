import React from 'react';
import ButtonClose from '../ButtoClose/ButtonClose';
import ButtonEdit from '../ButtonEdit/ButtonEdit';
import './TaskItem.scss';

const TaskItem = () => {
	return (
		<div>
			<li className='task'>
				<label className='check-box'>
					<input type='checkbox' className='check' placeholder='read book' />
					<span> read book</span>
				</label>

				<div className='actions'>
					<ButtonEdit />
					<ButtonClose />
				</div>
			</li>
		</div>
	);
};

export default TaskItem;
