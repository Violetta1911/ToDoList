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

	const onAddTask = () => {
		if (!taskTitle) return;
		setTasks([
			{ id: Date.now(), title: taskTitle, isDone: false, isChanging: false },
			...tasks,
		]);
		setTaskTitle('');
	};

	const onChangeTitle = (event, key) => {
		const correctedTasks = tasks.map((task) =>
			task.id === key ? { ...task, title: event.target.value } : task,
		);
		setTasks(correctedTasks);
	};

	const onToggleTask = (key) => {
		const checkedTasks = tasks.map((task) =>
			task.id === key ? { ...task, isDone: !task.isDone } : task,
		);
		setTasks(checkedTasks);
	};

	const onConfirmChanging = (key) => {
		const taskList = tasks.map((task) =>
			task.id === key && task.isDone
				? {
						...task,
						isChanging: !task.isChanging,
						isDone: !task.isDone,
				  }
				: task.id === key && !task.isDone && task.title
				? {
						...task,
						isChanging: !task.isChanging,
				  }
				: task,
		);

		setTasks(taskList);
	};

	const onRemoveTask = (key) => {
		const taskList = tasks.filter((task) => task.id !== key);
		setTasks(taskList);
	};
	const onRemoveTasks = () => {
		const taskList = tasks.filter((task) => !task.isDone);
		setTasks(taskList);
	};

	return (
		<form className='wrapper' onSubmit={(e) => e.preventDefault()}>
			<Header
				onInputTask={onInputTask}
				onAddTask={onAddTask}
				taskTitle={taskTitle}
			/>
			<TaskList
				tasks={tasks}
				onToggleTask={onToggleTask}
				onConfirmChanging={onConfirmChanging}
				onChangeTitle={onChangeTitle}
				onRemoveTask={onRemoveTask}
			/>
			<Footer onRemoveTasks={onRemoveTasks} />
		</form>
	);
};

export default App;
