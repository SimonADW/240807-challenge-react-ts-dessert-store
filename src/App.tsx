import { useState } from "react";
import "./App.css";
import MenuList from "./components/MenuList/MenuList";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import ShoppingCartEmpty from "./components/ShoppingCartEmpty/ShoppingCartEmpty";

function App() {
	const [cartContent, setCartContent] = useState([]);

	return (
		<>
			<section className="listWrapper">
				<MenuList />
				{cartContent.length !== 0 ? (
					<ShoppingCart cartContent={cartContent} />
				) : (
					<ShoppingCartEmpty />
				)}
			</section>
		</>
	);
}

export default App;
