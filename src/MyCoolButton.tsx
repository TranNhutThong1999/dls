import React from 'react';
import './MyCoolButton.css';
import { MyCoolButtonProps } from './MyCoolButton.interface';

const MyCoolButton: React.FC<MyCoolButtonProps> = ({
	type = 'button',
	title,
	onClick = () => {},
}) => {
	return (
		<button type={type} className="container" onClick={onClick}>
			{title}
		</button>
	);
};

export default MyCoolButton;
