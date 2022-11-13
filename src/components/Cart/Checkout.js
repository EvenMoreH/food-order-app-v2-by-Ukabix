import { useRef } from 'react';

import styles from './Checkout.module.css';

const isEmpty = (value) => value.trim() === '';
const isNotPostal = (value) => value.trim().length !== 5;

const Checkout = (props) => {
	const nameInputRef = useRef();
	const streetInputRef = useRef();
	const postalInputRef = useRef();
	const cityInputRef = useRef();

	const confirmHandler = (event) => {
		event.preventDefault();
		const enteredName = nameInputRef.current.value;
		const enteredCity = cityInputRef.current.value;
		const enteredStreet = streetInputRef.current.value;
		const enteredPostal = postalInputRef.current.value;

		const enteredNameIsValid = !isEmpty(enteredName);
		const enteredCityIsValid = !isEmpty(enteredCity);
		const enteredStreetIsValid = !isEmpty(enteredStreet);
		const enteredPostalIsValid = !isNotPostal(enteredPostal);

		const formIsValid =
			enteredNameIsValid &&
			enteredCityIsValid &&
			enteredStreetIsValid &&
			enteredPostalIsValid;

		if (formIsValid) {
			// submit data
		}
	};

	return (
		<form className={styles.form} onSubmit={confirmHandler}>
			<div className={styles.control}>
				<label htmlFor='name'>Your name</label>
				<input type='text' id='name' ref={nameInputRef} />
			</div>
			<div className={styles.control}>
				<label htmlFor='street'>Street</label>
				<input type='text' id='street' ref={streetInputRef} />
			</div>
			<div className={styles.control}>
				<label htmlFor='postal'>Postal code</label>
				<input type='text' id='postal' ref={postalInputRef} />
			</div>
			<div className={styles.control}>
				<label htmlFor='city'>City</label>
				<input type='text' id='city' ref={cityInputRef} />
			</div>
			<div className={styles.actions}>
				<button type='button' onClick={props.onCancel}>
					Cancel
				</button>
				<button className={styles.submit}>Confirm</button>
			</div>
		</form>
	);
};

export default Checkout;
