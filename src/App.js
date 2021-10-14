import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import TaskList from './components/TaskList/TaskList';
import Footer from './components/Footer/Footer';

const App = () => {
	const [tasks, setTasks] = useState([]);
	const [newTaskItem, setNewTaskItem] = useState('');

	const onCreateTask = (event) => {
		setNewTaskItem(event.target.value);
	};

	function onCheckedTask(key) {
		const checkedTasks = tasks.map((item) => {
			if (item.id === key) {
				return (item = { ...item, isDone: true });
			} else {
				return item;
			}
		});
		setTasks(checkedTasks);
	}
	function onNotCheckedTask(key) {
		const checkedTasks = tasks.map((item) => {
			if (item.id === key) {
				return (item = { ...item, isDone: false });
			} else {
				return item;
			}
		});

		setTasks(checkedTasks);
	}

	const onChangeTask = (event, key) => {
		event.preventDefault();
		const taskList = tasks.map((task) =>
			task.id === key ? console.log('yes') : console.log('no'),
		);
		setTasks(taskList);
	};

	const onRemoveTask = (key, event) => {
		event.preventDefault();
		const taskList = tasks.filter((task) => task.id !== key);
		setTasks(taskList);
	};
	const onRemoveTasks = (event) => {
		event.preventDefault();
		const taskList = tasks.filter((task) => task.isDone !== true);
		console.log(taskList);
		setTasks(taskList);
	};

	const onAddTask = (event) => {
		event.preventDefault();
		if (newTaskItem !== '') {
			setTasks([
				{ id: Date.now(), title: newTaskItem, isDone: false },
				...tasks,
			]);
			setNewTaskItem('');
		}
	};

	return (
		<form className='wrapper'>
			<Header
				onCreateTask={onCreateTask}
				onAddTask={onAddTask}
				newTaskItem={newTaskItem}
			/>
			<TaskList
				tasks={tasks}
				onCheckedTask={onCheckedTask}
				onNotCheckedTask={onNotCheckedTask}
				onChangeTask={onChangeTask}
				onRemoveTask={onRemoveTask}
			/>
			<Footer onRemoveTasks={onRemoveTasks} />
		</form>
	);
};

export default App;
