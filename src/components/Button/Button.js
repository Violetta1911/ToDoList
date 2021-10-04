import React from 'react';
import './Button.scss';

const Button = (props) => {
	return (
		<div>
			<button className={props.className}>{props.title}</button>
		</div>
	);
};

export default Button;
