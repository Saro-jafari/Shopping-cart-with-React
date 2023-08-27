import { useContext, useEffect, useState } from 'react';
import SingleProduct from './SingleProduct';
import { CartContext } from '../Context/Context';

const Cart = () => {
	const { cart } = useContext(CartContext);
	const [total, setTotal] = useState();
	useEffect(() => {
		setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
	}, [cart]);
	return (
		<div style={{ textAlign: 'center' }}>
			<span style={{ fontSize: 30 }}>My Cart</span>
			<br />
			<span style={{ fontSize: 30 }}>Total: ${total}</span>
			<div className="productContainer">
				{cart.map(product => (
					<SingleProduct product={product} key={product.id} />
				))}
			</div>
		</div>
	);
};

export default Cart;
