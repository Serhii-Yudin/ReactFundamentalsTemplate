import React from 'react';

import styles from './styles.module.css';

export const Button = ({
	buttonText,
	handleClick,
	className,
	type = 'button',
}) => {
	return (
		<button
			type={type}
			className={`${styles.button} ${className}`}
			onClick={handleClick}
		>
			{buttonText}
		</button>
	);
};
