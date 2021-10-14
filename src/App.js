import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import TaskList from './components/TaskList/TaskList';
import Footer from './components/Footer/Footer';

const confirmBtn = `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
width="22px" height="28px" fill = 'grey' viewBox="0 0 405.272 405.272" style="enable-background:new 0 0 405.272 405.272;"
xml:space="preserve">
<g>
<path d="M393.401,124.425L179.603,338.208c-15.832,15.835-41.514,15.835-57.361,0L11.878,227.836
   c-15.838-15.835-15.838-41.52,0-57.358c15.841-15.841,41.521-15.841,57.355-0.006l81.698,81.699L336.037,67.064
   c15.841-15.841,41.523-15.829,57.358,0C409.23,82.902,409.23,108.578,393.401,124.425z"/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>`;
const changeBtn = `
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='22'
		height='28'
		fill='grey'
		viewBox='0 0 22 28'>
		<path d='M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z' />
	</svg>
`;

const App = () => {
	const [tasks, setTasks] = useState([]);
	const [taskTitle, setTaskTitle] = useState('');

	const onInputTask = (event) => {
		setTaskTitle(event.target.value);
	};

	function onToggleTask(key) {
		const checkedTasks = tasks.map((item) =>
			item.id === key ? (item = { ...item, isDone: !item.isDone }) : item,
		);
		setTasks(checkedTasks);
	}
	// function onNotCheckedTask(key) {
	// 	const checkedTasks = tasks.map((item) =>
	// 		item.id === key ? (item = { ...item, isDone: !item.isDone }) : item,
	// 	);
	// 	setTasks(checkedTasks);
	// }

	const onChangeTask = (event, key) => {
		event.preventDefault();
		event.target.parentElement.innerHTML === confirmBtn
			? (event.target.parentElement.innerHTML = changeBtn)
			: (event.target.parentElement.innerHTML = confirmBtn);
		const taskList = tasks.map((task) =>
			task.id === key ? { ...task, title: 'change' } : task,
		);
		console.log(taskList);
	};

	const onRemoveTask = (event, key) => {
		event.preventDefault();
		const taskList = tasks.filter((task) => task.id !== key);
		setTasks(taskList);
	};
	const onRemoveTasks = (event) => {
		event.preventDefault();
		const taskList = tasks.filter((task) => !task.isDone);
		console.log(taskList);
		setTasks(taskList);
	};

	const onAddTask = (event) => {
		event.preventDefault();
		if (!taskTitle) return;
		setTasks([{ id: Date.now(), title: taskTitle, isDone: false }, ...tasks]);
		setTaskTitle('');
	};

	return (
		<form className='wrapper'>
			<Header
				onInputTask={onInputTask}
				onAddTask={onAddTask}
				taskTitle={taskTitle}
			/>
			<TaskList
				tasks={tasks}
				changeBtn={changeBtn}
				onToggleTask={onToggleTask}
				onChangeTask={onChangeTask}
				onRemoveTask={onRemoveTask}
			/>
			<Footer onRemoveTasks={onRemoveTasks} />
		</form>
	);
};

export default App;
