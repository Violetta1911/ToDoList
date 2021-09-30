import React from 'react';
import ButtonClose from '../ButtoClose/ButtonClose';
import ButtonEdit from '../ButtonEdit/ButtonEdit';
import './TaskItem.scss';

const TaskItem = (props) => {
	return (
		<div className='task'>
			<label className='check-box'>
				<input type='checkbox' className='check' />
				<span>{props.datas.task}</span>
			</label>

			<div className='actions'>
				<ButtonEdit />
				<ButtonClose />
			</div>
		</div>
	);
};

export default TaskItem;
