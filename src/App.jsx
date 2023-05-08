import Navbar from "./components/Navbar.jsx";
import Products from "./components/Products.jsx";
import Footer from "./components/Footer.jsx";
import "./styles.css";

const App = () => {
	return (
		<div>
			<Navbar></Navbar>
			<Products></Products>
			<Footer></Footer>
		</div>
	);
};

export default App;
