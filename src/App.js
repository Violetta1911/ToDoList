import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import TaskList from './components/TaskList/TaskList';
import Footer from './components/Footer/Footer';

const App = () => {
	const [tasks, setTasks] = useState([]);
	const [taskTitle, setTaskTitle] = useState('');
	const [completedCount, setCompletedCount] = useState(0);

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
		calcCompletedTasks(checkedTasks);
	};

	const onConfirmChanging = (key) => {
		const taskList = tasks.map((task) =>
			task.id === key
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
		calcCompletedTasks(taskList);
		setTasks(taskList);
	};
	const onRemoveTasks = () => {
		const taskList = tasks.filter((task) => !task.isDone);
		setTasks(taskList);
		setCompletedCount(0);
	};
	const calcCompletedTasks = (tasks) => {
		const completedTasks = tasks.filter((task) => task.isDone);
		setCompletedCount(completedTasks.length);
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
			<Footer
				onRemoveTasks={onRemoveTasks}
				tasks={tasks}
				completedCount={completedCount}
			/>
		</form>
	);
};

export default App;
