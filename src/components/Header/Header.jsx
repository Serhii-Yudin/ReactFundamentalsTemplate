import React from 'react';

import { Button } from '../../common';
import { LOGOUT } from './constants';
import { Logo } from './components';

import styles from './styles.module.css';

export const Header = () => {
	return (
		<div className={styles.headerContainer}>
			<Logo />
			<div className={styles.userContainer}>
				<p className={styles.userName}>Name</p>
				<Button buttonText={LOGOUT} />
			</div>
		</div>
	);
};
