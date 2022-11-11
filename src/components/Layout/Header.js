import React from 'react';

import styles from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
	return (
		<React.Fragment>
			<header className={styles.header}>
				<h1>ReactMeals</h1>
				<HeaderCartButton onClick={props.onDisplayCart} />
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
