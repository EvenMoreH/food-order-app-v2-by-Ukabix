import React, { useEffect, useState } from 'react';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import styles from './AvailableMeals.module.css';

const AvailableMeals = () => {
	const [meals, setMeals] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [httpError, setHttpError] = useState();

	// reminder - you should avoid using async in useEffect
	useEffect(() => {
		const fetchMeals = async () => {
			// setIsLoading(true);
			const response = await fetch(
				'https://react-app-v2-b7bcb-default-rtdb.europe-west1.firebasedatabase.app/meals.json'
			);
			// check response for error
			if (!response.ok) {
				throw new Error('Something went wrong, please try again');
			}
			const responseData = await response.json();
			const loadedMeals = [];
			for (const key in responseData) {
				loadedMeals.push({
					id: key,
					name: responseData[key].name,
					description: responseData[key].description,
					price: +responseData[key].price,
				});
			}
			setMeals(loadedMeals);
			setIsLoading(false);
		};
		// this sould be async and could be exported to fn outside of scope
		// try {
		// 	fetchMeals();
		// } catch (error) {
		// 	setIsLoading(false);
		// 	setHttpError(error);
		// }
		// another approach - good practice to handle promises
		fetchMeals().catch((error) => {
			setIsLoading(false);
			setHttpError(error.message);
		});
	}, []);
	// handle loading state
	if (isLoading) {
		return (
			<section className={styles.MealsLoading}>
				<p>Loading, please wait</p>
			</section>
		);
	}
	// handle error state
	if (httpError) {
		return (
			<section className={styles.MealsError}>
				<p>{httpError}</p>
			</section>
		);
	}
	const mealsList = meals.map((meal) => (
		<MealItem
			key={meal.id}
			id={meal.id}
			name={meal.name}
			description={meal.description}
			price={meal.price}
		/>
	));
	return (
		<section className={styles.meals}>
			<Card>
				<ul>{mealsList}</ul>
			</Card>
		</section>
	);
};

export default AvailableMeals;
