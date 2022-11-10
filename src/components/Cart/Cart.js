import Modal from '../UI/Modal';
import styles from './Cart.module.css';

const Cart = (props) => {
	const cartItems = (
		<ul className={styles['cart-items']}>
			{[{ id: 'c1', amount: 2, price: 12.99 }].map((item) => (
				<li>{item.name}</li>
			))}
		</ul>
	);
	return (
		<Modal>
			{cartItems}
			<div className={styles.total}>
				<span>Total Amount</span>
				<span>35.66</span>
			</div>
			<div className={styles.actiosn}>
				<button className={styles['button--alt']}>Close</button>
				<button className={styles.button}>Order</button>
			</div>
		</Modal>
	);
};

export default Cart;
