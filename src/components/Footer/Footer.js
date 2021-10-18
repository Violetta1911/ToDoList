import React from 'react';
import './Footer.scss';
import ProgressBar from '../ProgressBar/ProgressBar';
import Button from '../Button/Button';
import { ReactComponent as IconClose } from '../Button/close.svg';

const Footer = ({ onRemoveTasks, tasks, isChecked }) => {
	return (
		<footer className='state'>
			{tasks.length >= 1 ? (
				<ProgressBar totalTasks={tasks.length} isChecked={isChecked} />
			) : null}
			{isChecked ? (
				<Button
					className='delete-task'
					onClick={(event) => onRemoveTasks(event)}>
					<div className='buttonText'>
						<span>Remove checked</span>
						<IconClose />
					</div>
				</Button>
			) : null}
		</footer>
	);
};

export default Footer;
