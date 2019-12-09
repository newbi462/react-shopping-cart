import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

import { ProductContext } from "./contexts/ProductContext";
import { CartContext } from "./contexts/CartContext";

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item])
	};

	return (
		<div className="App">
		 	<ProductContext.Provider value={{ products, addItem }}>{/*why are these in contexts?*/}
				<CartContext.Provider value={cart}>
					{/*<Navigation cart={cart} />*/}
					<Navigation />
				</CartContext.Provider>
			</ProductContext.Provider>

			{/* Routes */}
			<ProductContext.Provider value={{ products, addItem }}>
				<Route
					exact path="/"
					component={Products}
				/>
					{/*render={() => (
						<Products
							products={products}
							addItem={addItem}
						/>

					)}
				/>*/}
			</ProductContext.Provider>

			<ProductContext.Provider value={{ products, addItem }}>{/*why are these in contexts?*/}
				<CartContext.Provider value={cart}>
					<Route
						path="/cart"
						component={ShoppingCart}
					/>
						{/*render={() => <ShoppingCart cart={cart} />}
					/>*/}
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
