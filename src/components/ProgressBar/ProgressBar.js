import React from 'react';
import './ProgressBar.scss';

const ProgressBar = () => {
	return (
		<div className='progress'>
			<div className='bar'>
				<span>1 of 2 tasks done</span>
			</div>
		</div>
	);
};

export default ProgressBar;
