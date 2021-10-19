import React from 'react';
import './ProgressBar.scss';

const ProgressBar = ({ totalTasks, completedCount }) => {
	const rate = (completedCount / totalTasks) * 100;
	return (
		<div className='progress'>
			<div className='bar' style={{ width: `${rate}%` }}>
				<span>
					{completedCount} of {totalTasks} tasks done
				</span>
			</div>
		</div>
	);
};

export default ProgressBar;
