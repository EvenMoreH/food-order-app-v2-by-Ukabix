import React, { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
	const [cartIsDisplayed, setCartIsDisplayed] = useState(false);

	const cartDisplayHandler = () => {
		setCartIsDisplayed(true);
	};

	const cartHideHandler = () => {
		setCartIsDisplayed(false);
	};

	return (
		<CartProvider>
			{cartIsDisplayed && <Cart onHideCart={cartHideHandler} />}
			<Header onDisplayCart={cartDisplayHandler} />
			<main>
				<Meals />
			</main>
		</CartProvider>
	);
}

export default App;
