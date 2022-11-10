import React, { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
	const [cartIsDisplayed, setCartIsDisplayed] = useState(false);

	const cartDisplayHandler = () => {
		setCartIsDisplayed(true);
	};

	const cartHideHandler = () => {
		setCartIsDisplayed(false);
	};

	return (
		<React.Fragment>
			{cartIsDisplayed && <Cart />}
			<Header onDisplayCart={cartDisplayHandler} />
			<main>
				<Meals />
			</main>
		</React.Fragment>
	);
}

export default App;
