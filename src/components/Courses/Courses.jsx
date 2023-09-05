import React, { useState } from 'react';

import { CourseCard, SearchBar } from './components';
import { Button } from '../../common';
import { ADD_NEW_COURSE } from './constants';

import styles from './styles.module.css';

export const Courses = ({ coursesList, authorsList, handleShowCourse }) => {
	const [courses, setCourses] = useState(coursesList);

	const handleSearch = (value) => {
		const searchedCourses = coursesList.filter(
			(course) =>
				course.title.toLowerCase().indexOf(value) >= 0 ||
				course.id.indexOf(value) >= 0
		);

		setCourses(searchedCourses);
	};

	return courses.length ? (
		<>
			<div className={styles.panel}>
				<SearchBar getSearchValue={handleSearch} />
				<Button handleClick={() => null} buttonText={ADD_NEW_COURSE} />
			</div>
			{courses.map((course) => (
				<CourseCard
					key={course.id}
					{...course}
					authorsList={authorsList}
					handleShowCourse={handleShowCourse}
				/>
			))}
		</>
	) : (
		<div>
			<h1>Your List Is Empty</h1>
			<Button buttonText='Add new course' />
		</div>
	);
};
