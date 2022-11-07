import styles from './Input.module.css';

const Input = (props) => {
	return (
		<div className={styles.input}>
			<label htmlFor={styles.input.id}>{props.label}</label>
			<input {...props.input} />
		</div>
	);
};

export default Input;
