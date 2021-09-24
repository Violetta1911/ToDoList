import './App.scss';
import Header from './components/Header/Header';
import CreateForm from './components/CreatForm/CreateForm';
import ProgressBar from './components/ProgressBar/ProgressBar';

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
