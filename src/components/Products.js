import React, { useContext } from 'react';

// Components
import Product from './Product';

import { ProductContext } from "./../contexts/ProductContext";

const Products = () => {
	const { products, addItem } = useContext(ProductContext);
	// left must match how you passed in App in this case

	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
