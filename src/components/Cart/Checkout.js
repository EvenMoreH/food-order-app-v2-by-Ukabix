import { useRef, useState } from 'react';

import styles from './Checkout.module.css';

const isEmpty = (value) => value.trim() === '';
const isNotPostal = (value) => value.trim().length !== 5;

const Checkout = (props) => {
	const nameInputRef = useRef();
	const streetInputRef = useRef();
	const postalInputRef = useRef();
	const cityInputRef = useRef();

	// use combined state
	const [formInputsValidity, setFormInputsValidity] = useState({
		name: true,
		street: true,
		city: true,
		postalCode: true,
	});

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

		setFormInputsValidity({
			name: enteredCityIsValid,
			street: enteredStreetIsValid,
			city: enteredCityIsValid,
			postalCode: enteredPostalIsValid,
		});

		const formIsValid =
			enteredNameIsValid &&
			enteredCityIsValid &&
			enteredStreetIsValid &&
			enteredPostalIsValid;

		if (!formIsValid) {
			return;
		}
		// POST data
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
