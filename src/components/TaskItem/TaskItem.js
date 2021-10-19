import Button from '../Button/Button';
import { ReactComponent as IconPencil } from '../Button/Icons/pencil-fill.svg';
import { ReactComponent as IconClose } from '../Button/Icons/close.svg';
import { ReactComponent as IconConfirm } from '../Button/Icons/confirm.svg';
import './TaskItem.scss';

const TaskItem = ({
	task,
	onToggleTask,
	onChangeTitle,
	onConfirmChanging,
	onRemoveTask,
}) => {
	return (
		<li className='task'>
			<label className='check-box'>
				<input
					type='checkbox'
					className='check'
					checked={task.isDone ? true : false}
					onChange={onToggleTask}
				/>
				{task.isChanging ? (
					<input
						type='text'
						className='task__change'
						onChange={onChangeTitle}
						value={task.title}
					/>
				) : (
					<span className={task.isDone ? 'taskTitleCross' : 'taskTitle'}>
						{task.title}
					</span>
				)}
			</label>
			<div className='actions'>
				<Button className='icon-pencil' onClick={onConfirmChanging}>
					{task.isChanging ? <IconConfirm /> : <IconPencil />}
				</Button>
				<Button className='icon-close' onClick={onRemoveTask}>
					<IconClose />
				</Button>
			</div>
		</li>
	);
};

export default TaskItem;
