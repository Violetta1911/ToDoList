import React from 'react';
import './Footer.scss';
import ProgressBar from '../ProgressBar/ProgressBar';
import Button from '../Button/Button';

const Footer = () => {
	return (
		<footer className='state'>
			<ProgressBar />
			<Button className='delete-task'>
				<div className='buttonText'>
					<span>Remove Task</span>
					<svg
						version='1.1'
						xmlns='http://www.w3.org/2000/svg'
						width='22'
						height='28'
						fill='white'
						viewBox='0 0 22 28'>
						<path d='M20.281 20.656c0 0.391-0.156 0.781-0.438 1.062l-2.125 2.125c-0.281 0.281-0.672 0.438-1.062 0.438s-0.781-0.156-1.062-0.438l-4.594-4.594-4.594 4.594c-0.281 0.281-0.672 0.438-1.062 0.438s-0.781-0.156-1.062-0.438l-2.125-2.125c-0.281-0.281-0.438-0.672-0.438-1.062s0.156-0.781 0.438-1.062l4.594-4.594-4.594-4.594c-0.281-0.281-0.438-0.672-0.438-1.062s0.156-0.781 0.438-1.062l2.125-2.125c0.281-0.281 0.672-0.438 1.062-0.438s0.781 0.156 1.062 0.438l4.594 4.594 4.594-4.594c0.281-0.281 0.672-0.438 1.062-0.438s0.781 0.156 1.062 0.438l2.125 2.125c0.281 0.281 0.438 0.672 0.438 1.062s-0.156 0.781-0.438 1.062l-4.594 4.594 4.594 4.594c0.281 0.281 0.438 0.672 0.438 1.062z'></path>
					</svg>
				</div>
			</Button>
		</footer>
	);
};

export default Footer;
