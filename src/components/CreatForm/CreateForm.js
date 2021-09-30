import React from 'react';
import './CreateForm.scss';

const CreateForm = (props) => {
	return <form className='task-box'>{props.createTask}</form>;
};

export default CreateForm;
