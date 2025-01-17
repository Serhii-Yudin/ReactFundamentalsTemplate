import React from 'react';

import { Button } from '../../../../common';
import { SHOW_COURSE } from './constants';
import { getCourseDuration, formatCreationDate } from '../../../../helpers';

import styles from './styles.module.css';

export const CourseCard = ({
	title,
	description,
	authors,
	authorsList,
	duration,
	creationDate,
	id,
	handleShowCourse,
}) => {
	const getAuthors = () => {
		return authorsList
			.filter((author) => authors.includes(author.id))
			.map((item) => item.name)
			.join(', ');
	};
	return (
		<div className={styles.cardContainer} data-testid='courseCard'>
			<div className={styles.cardText}>
				<h2>{title}</h2>
				<p>{description}</p>
			</div>
			<div className={styles.cardDetails}>
				<p>
					<b>Authors: </b>
					{getAuthors()}
				</p>
				<p>
					<b>Duration:</b>
					<span>{getCourseDuration(duration)}</span>
				</p>
				<p>
					<b>Created: </b>
					<span>{formatCreationDate(creationDate)}</span>
				</p>
				<Button
					buttonText={SHOW_COURSE}
					handleClick={() => handleShowCourse(id)}
				/>
			</div>
		</div>
	);
};
