import { useContext } from 'react';

import Modal from '../UI/Modal';
import styles from './Cart.module.css';
import CartContext from '../../store/cart-context';

const Cart = (props) => {
	const cartCtx = useContext(CartContext);
	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
	const cartItems = (
		<ul className={styles['cart-items']}>
			{cartCtx.items.map((item) => (
				<li>{item.name}</li>
			))}
		</ul>
	);

	return (
		<Modal onHideCart={props.onHideCart}>
			{cartItems}
			<div className={styles.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			<div className={styles.actions}>
				<button className={styles['button--alt']} onClick={props.onHideCart}>
					Close
				</button>
				<button className={styles.button}>Order</button>
			</div>
		</Modal>
	);
};

export default Cart;
