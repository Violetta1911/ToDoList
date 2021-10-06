import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import TaskList from './components/TaskList/TaskList';
import Footer from './components/Footer/Footer';

class App extends React.Component {
	state = { tasks: [], newTaskItem: '' };

	readTask = (event) => {
		this.setState({ newTaskItem: event.target.value });
	};

	addTask = (event) => {
		event.preventDefault();

		//1.делаем копию объекта state
		const tasks = { ...this.state.tasks };
		//2.добавляем новый task в переменную task
		if (this.state.newTaskItem !== '') {
			tasks[`task${Date.now()}`] = {
				title: this.state.newTaskItem,
				isDone: false,
				id: Date.now(),
			};
		}
		//3.записать обновленный tasks в state
		this.setState({ tasks });
	};
	render() {
		return (
			<form className='wrapper'>
				<Header readTask={this.readTask} addTask={this.addTask} />
				<TaskList tasks={this.state.tasks} />
				<Footer />
			</form>
		);
	}
}

export default App;
