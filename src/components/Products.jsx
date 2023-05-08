import { Link } from "react-router-dom";
import ProductsItems from "./ProductsItems";

const Products = () => {
	return (
		<div className="container">
			{ProductsItems.map((item) => (
				<div className="ProductsItems" key={item.id}>
					{item.name}
				</div>
			))}
		</div>
	);
};

export default Products;
