import React from 'react';
import ButtonRemove from './ButtonRemove';

const ProgressBar = () => {
	return (
		<div className='state'>
			<div className='progress'>
				<div className='bar'>
					<span>1 of 2 tasks done</span>
				</div>
			</div>
			<ButtonRemove />
		</div>
	);
};

export default ProgressBar;
