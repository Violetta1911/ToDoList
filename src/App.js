import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import TaskList from './components/TaskList/TaskList';
import Footer from './components/Footer/Footer';

const App = () => {
	const [tasks, setTasks] = useState([]);
	const [taskTitle, setTaskTitle] = useState('');

	const onInputTask = (event) => {
		setTaskTitle(event.target.value);
	};

	function onToggleTask(key) {
		const checkedTasks = tasks.map((task) =>
			task.id === key ? { ...task, isDone: !task.isDone } : task,
		);
		setTasks(checkedTasks);
	}

	const onChangeTask = (event, key) => {
		event.preventDefault();

		const taskList = tasks.map((task) =>
			task.id === key ? { ...task, isChange: !task.isChange } : task,
		);

		setTasks(taskList);
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
		setTasks([
			{ id: Date.now(), title: taskTitle, isDone: false, isChange: false },
			...tasks,
		]);
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
				onToggleTask={onToggleTask}
				onChangeTask={onChangeTask}
				onRemoveTask={onRemoveTask}
			/>
			<Footer onRemoveTasks={onRemoveTasks} />
		</form>
	);
};

export default App;
