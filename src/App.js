import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import TaskList from './components/TaskList/TaskList';
import Footer from './components/Footer/Footer';
import TaskItem from './components/TaskItem/TaskItem';

class App extends React.Component {
	render() {
		const data = [
			{ id: 1, task: 'read book', isDone: false },
			{ id: 2, task: 'learn React', isDone: false },
			{ id: 3, task: `buy humster's food`, isDone: true },
		];

		const renderTask = data.map((task) => {
			return !task.isDone ? <TaskItem key={task.id} datas={task} /> : null;
		});

		const createTask = () => {
			console.log('Hello!');
		};
		return (
			<form className='wrapper'>
				<Header createTask={createTask} />
				<TaskList renderTask={renderTask} />
				<Footer />
			</form>
		);
	}
}

export default App;
