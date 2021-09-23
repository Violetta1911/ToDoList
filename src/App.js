import './App.scss';
import Header from './components/Header';
import CreateForm from './components/CreateForm';
import ProgressBar from './components/ProgressBar';

function App() {
	return (
		<div className='wrapper'>
			<Header />
			<CreateForm />
			<ProgressBar />
		</div>
	);
}

export default App;
