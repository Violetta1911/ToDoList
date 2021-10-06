import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import TaskList from './components/TaskList/TaskList';
import Footer from './components/Footer/Footer';
import TaskItem from './components/TaskItem/TaskItem';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.addTask = this.addTask.bind(this);
		this.renderTask = this.renderTask.bind(this);
		this.state = { tasks: {}, value: '' };
	}
	handleChange(e) {
		this.setState({ value: e.target.value });
	}

	renderTask() {
		this.state.tasks.map((task) => {
			return <TaskItem key={task.id} task={task.title} />;
		});
	}
	addTask() {
		//1.делаем копию объекта state
		const tasks = { ...this.state.tasks };
		//2.добавляем новый task в переменную task
		tasks[`task${Date.now()}`] = {
			title: this.state.value,
			isDone: false,
			id: Date.now(),
		};
		//3.записать обновленный tasks в state
		this.setState({ tasks });
	}
	render() {
		return (
			<form className='wrapper'>
				<Header handleChange={this.handleChange} addTask={this.addTask} />
				<TaskList render={this.renderTask} />
				<Footer />
			</form>
		);
	}
}

export default App;
