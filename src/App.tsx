import React from 'react';
import MyCoolButton from './MyCoolButton';
import './App.css';

const App: React.FC = () => {
	const handleClick = () => {
		alert('Button clicked!');
	};

	return (
		<div className="app">
			<h1>My Cool Button Demo</h1>
			<div className="button-container">
				<MyCoolButton title="Click Me!" onClick={handleClick} />
			</div>
		</div>
	);
};

export default App;
