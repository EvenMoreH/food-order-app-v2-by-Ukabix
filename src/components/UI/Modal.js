import { ReactDOM } from 'react-dom';

import styles from './Modal.module.css';

const Backdrop = (props) => {
	return <div className={styles.backdrop}></div>;
};

const ModalOverlay = (props) => {
	return (
		<div className={styles.modal}>
			<div className={styles.content}>{props.children}</div>
		</div>
	);
};

const portalDestination = document.getElementById('overlays');

const Modal = (props) => {
	return (
		<>
			{ReactDOM.CreatePortal(<Backdrop />, portalDestination)}
			{ReactDOM.CreatePortal(
				<ModalOverlay>{props.children}</ModalOverlay>,
				portalDestination
			)}
		</>
	);
};

export default Modal;
