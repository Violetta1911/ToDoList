import React from 'react';
import './ProgressBar.scss';

const ProgressBar = ({ totalTasks, isChecked }) => {
	const rate = (isChecked / totalTasks) * 100;
	console.log(rate);
	return (
		<div className='progress'>
			<div className='bar' style={{ width: `${rate}%` }}>
				<span>
					{isChecked} of {totalTasks} tasks done
				</span>
			</div>
		</div>
	);
};

export default ProgressBar;
