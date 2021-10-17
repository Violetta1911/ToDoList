import React from 'react';
import './Footer.scss';
import ProgressBar from '../ProgressBar/ProgressBar';
import Button from '../Button/Button';
import { ReactComponent as IconClose } from '../Button/close.svg';

const Footer = ({ onRemoveTasks }) => {
	return (
		<footer className='state'>
			<ProgressBar />
			<Button className='delete-task' onClick={(event) => onRemoveTasks(event)}>
				<div className='buttonText'>
					<span>Remove checked</span>
					<IconClose />
				</div>
			</Button>
		</footer>
	);
};

export default Footer;
