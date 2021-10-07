import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import TaskList from './components/TaskList/TaskList';
import Footer from './components/Footer/Footer';

class App extends React.Component {
	state = { tasks: [], newTaskItem: '' };

	onChangeTask = (event) => {
		this.setState({ newTaskItem: event.target.value });
	};

	onRemoveTask = (index) => {
		const taskList = this.state.tasks.splice(index, 1);
		this.setState({ tasks: taskList });
	};

	onCorrectTask = (event) => {
		console.log('hi');
	};

	onAddTask = (event) => {
		event.preventDefault();

		this.setState((prevState) => ({
			tasks: [
				...prevState.tasks,
				{ id: Date.now(), title: this.state.newTaskItem, isDone: false },
			],
		}));
		this.setState({ newTaskItem: '' });
	};
	render() {
		return (
			<form className='wrapper'>
				<Header
					onChangeTask={this.onChangeTask}
					onAddTask={this.onAddTask}
					newTaskItem={this.state.newTaskItem}
				/>
				<TaskList
					tasks={this.state.tasks}
					onRemoveTask={this.onRemoveTask}
					onCorrectTask={this.onCorrectTask}
				/>
				<Footer />
			</form>
		);
	}
}

export default App;
