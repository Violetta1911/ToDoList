import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import TaskList from './components/TaskList/TaskList';
import Footer from './components/Footer/Footer';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { tasks: {}, value: '' };
		this.readTask = this.readTask.bind(this);
		this.addTask = this.addTask.bind(this);
	}
	readTask(e) {
		this.setState({ value: e.target.value });
	}

	addTask(event) {
		event.preventDefault();
		//1.делаем копию объекта state
		const tasks = { ...this.state.tasks };
		//2.добавляем новый task в переменную task
		if (this.state.value != '') {
			tasks[`task${Date.now()}`] = {
				title: this.state.value,
				isDone: false,
				id: Date.now(),
			};
		}
		//3.записать обновленный tasks в state
		this.setState({ tasks });
		event.preventDefault();
	}
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
