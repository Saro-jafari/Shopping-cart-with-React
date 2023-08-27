import { faker } from '@faker-js/faker';
import { useContext, useState } from 'react';
import SingleProduct from './SingleProduct';
import './styles.css';

faker.seed(100);
const Home = () => {
	// const { cart, setCart } = useContext(cartContext);
	// console.log(cart);
	const productsArray = [...Array(20)].map(() => ({
		id: faker.datatype.uuid(),
		name: faker.commerce.productName(),
		price: faker.commerce.price(),
		image: faker.image.image(),
	}));
	// console.log(productsArray);

	const [products] = useState(productsArray);
	// problem with this useState products
	return (
		<div className="productContainer">
			{products.map(product => (
				<SingleProduct product={product} key={product.id} />
			))}
		</div>
	);
};

export default Home;
