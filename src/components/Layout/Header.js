import React from 'react';

import styles from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';

const Header = (props) => {
	return (
		<React.Fragment>
			<header className={styles.header}>
				<h1>ReactMeals</h1>
				<button>Cart</button>
			</header>
			<div>
				<img
					className={styles['main-image']}
					src={mealsImage}
					alt='a table full of food!'
				/>
			</div>
		</React.Fragment>
	);
};

export default Header;
