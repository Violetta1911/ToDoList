import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import TaskCreationForm from './components/TaskCreationForm/TaskCreationForm';
import Footer from './components/Footer/Footer';
import TaskItem from './components/TaskItem/TaskItem';

class App extends React.Component {
	render() {
		const data = [
			{ id: 1, task: 'read book', status: true },
			{ id: 2, task: 'learn React', status: true },
			{ id: 3, task: `buy humster's food`, status: true },
		];

		const showTask = data.map((task) => {
			return <TaskItem key={task.id} datas={task} />;
		});

		return (
			<div className='wrapper'>
				<Header />
				<TaskCreationForm showTask={showTask} />
				<Footer />
			</div>
		);
	}
}

export default App;
