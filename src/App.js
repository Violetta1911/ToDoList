import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import CreateForm from './components/CreatForm/CreateForm';
import ProgressBar from './components/ProgressBar/ProgressBar';
import TaskItem from './components/TaskItem/TaskItem';

class App extends React.Component {
	render() {
		const data = [
			{ id: 1, task: 'read book' },
			{ id: 2, task: 'learn React' },
			{ id: 3, task: `buy humster's food` },
		];

		const createTask = data.map((task) => {
			return <TaskItem key={task.id} datas={task} />;
		});

		return (
			<div className='wrapper'>
				<Header />
				<CreateForm createTask={createTask} />
				<ProgressBar />
			</div>
		);
	}
}

export default App;
