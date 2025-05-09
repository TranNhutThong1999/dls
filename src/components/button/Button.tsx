import React from 'react';
import './button.css';
import { ButtonProps } from './Button.interface';

const Button: React.FC<ButtonProps> = ({
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

export default Button;
