import React from 'react';
import './App.css';
import Button from './components/button/Button';

const App: React.FC = () => {
	const handleClick = () => {
		alert('Button clicked!');
	};

	return (
		<div className="app">
			<h1>My Cool Button Demo</h1>
			<div className="button-container">
				<Button title="Click Me!" onClick={handleClick} />
			</div>
		</div>
	);
};

export default App;
