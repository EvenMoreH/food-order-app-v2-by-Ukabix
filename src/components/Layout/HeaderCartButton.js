import React, { useContext, useEffect, useState } from 'react';

import styles from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
	const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
	const ctxCart = useContext(CartContext);
	const { items } = ctxCart;

	const numberOfCartItems = items.reduce((currentNumber, currentItem) => {
		return currentNumber + currentItem.amount;
	}, 0);

	const btnStyles = `${styles.button} ${btnIsHighlighted ? styles.bump : ''}`;

	useEffect(() => {
		if (items.length === 0) {
			return;
		}
		setBtnIsHighlighted(true);
		const timer = setTimeout(() => {
			setBtnIsHighlighted(false);
		}, 300);
		// cleaning function
		return () => {
			clearTimeout(timer);
		};
	}, [items]);

	return (
		<button className={btnStyles} onClick={props.onClick}>
			<span className={styles.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={styles.badge}>{numberOfCartItems}</span>
		</button>
	);
};

export default HeaderCartButton;
