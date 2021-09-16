import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className='wrapper'>
			<h1>todolist</h1>
			<div className='add-task-box'>
				<input type='text' name='task' id='task' placeholder='add new task' />
				<button className='add-task'>+</button>
			</div>
			<ul className='task-box'>
				<li className='task'>
					<div class='check-box'>
						<span className='check'></span>
						<span> read the book</span>
					</div>

					<div className='actions'>
						<span className='icon-pencil'></span>
						<span className='icon-close'></span>
					</div>
				</li>
				<li className='task'>
					<div className='check-box'>
						<span className='check'></span>
						<span className='task_ready'> by dog food</span>
					</div>

					<div className='change-box'>
						<span className='icon-pencil'></span>
						<span className='icon-close'></span>
					</div>
				</li>
			</ul>
		</div>
	);
}

export default App;
