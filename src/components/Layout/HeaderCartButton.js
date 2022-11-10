import React, { useContext } from 'react';

import styles from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
	const ctxCard = useContext(CartContext);
	const numberOfCartItems = ctxCard.items.reduce((currentNumber, currentItem) => {
		return currentNumber + currentItem.amount;
	}, 0);

	return (
		<button className={styles.button} onClick={props.onClick}>
			<span className={styles.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={styles.badge}>{numberOfCartItems}</span>
		</button>
	);
};

export default HeaderCartButton;
