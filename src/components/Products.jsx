// import { Link } from "react-router-dom";
// import ProductsItems from "./ProductsItems";

// const Products = () => {
// 	return (
// 		<div className="container">
// 			{ProductsItems.map((item) => (
// 				<div className="ProductsItems" key={item.id} onClick={() => handleClick(item.kategori)}>
// 					{item.kategori}
// 				</div>
// 			))}
// 		</div>
// 	);
// };

// export default Products;

import ProductsItems from "./ProductsItems";
import { useState } from "react";

const Products = () => {
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [selectedName, setSelectedName] = useState(null);

	const handleNameClick = (name) => {
		setSelectedName(name);
	};

	return (
		<div className="container">
			{selectedCategory === null && (
				<div className="categories">
					{ProductsItems.map((category) => (
						<div
							key={category.id}
							className="ProductsItems"
							onClick={() => setSelectedCategory(category.kategori)}
						>
							{category.kategori}
						</div>
					))}
				</div>
			)}

			{selectedCategory !== null && selectedName === null && (
				<div className="names">
					{ProductsItems.find(
						(category) => category.kategori === selectedCategory
					).list.map((nameObj) => (
						<div
							key={nameObj.name}
							className="ProductsItems"
							onClick={() => handleNameClick(nameObj.name)}
						>
							{nameObj.name}
						</div>
					))}
				</div>
			)}

			{selectedName !== null && (
				<div className="items">
					{ProductsItems.find(
						(category) => category.kategori === selectedCategory
					)
						.list.find((nameObj) => nameObj.name === selectedName)
						.items.map((item) => (
							<div key={item} className="item">
								{item}
							</div>
						))}
				</div>
			)}
		</div>
	);
};

export default Products;
