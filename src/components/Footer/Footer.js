import React from 'react';
import './Footer.scss';
import ProgressBar from '../ProgressBar/ProgressBar';
import Button from '../Button/Button';
import { ReactComponent as IconClose } from '../Button/Icons/close.svg';

const Footer = ({ onRemoveTasks, tasks, completedCount }) => {
	return (
		<footer className='footer'>
			{tasks.length ? (
				<ProgressBar
					totalTasks={tasks.length}
					completedCount={completedCount}
				/>
			) : null}
			{completedCount ? (
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
