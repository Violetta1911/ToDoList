import Button from '../Button/Button';
import { ReactComponent as IconPencil } from '../Button/pencil-fill.svg';
import { ReactComponent as IconClose } from '../Button/close.svg';
import { ReactComponent as IconConfirm } from '../Button/confirm.svg';
import './TaskItem.scss';

const TaskItem = (props) => {
	return (
		<li className='task'>
			<label className='check-box'>
				<input
					type='checkbox'
					className='check'
					checked={props.task.isDone ? true : false}
					onChange={props.onToggleTask}
				/>
				{props.task.isChanging ? (
					<input
						type='text'
						className='task__change'
						onChange={props.onChangeTitle}
						value={props.task.title}
					/>
				) : (
					<span className={props.task.isDone ? 'taskTitleCross' : 'taskTitle'}>
						{props.task.title}
					</span>
				)}
			</label>
			<div className='actions'>
				<Button className='icon-pencil' onClick={props.onConfirmChanging}>
					{props.task.isChanging ? <IconConfirm /> : <IconPencil />}
				</Button>
				<Button className='icon-close' onClick={props.onRemoveTask}>
					<IconClose />
				</Button>
			</div>
		</li>
	);
};

export default TaskItem;
