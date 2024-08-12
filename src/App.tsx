import { useState } from "react";
import "./App.css";
import MenuList from "./components/MenuList/MenuList";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import ShoppingCartEmpty from "./components/ShoppingCartEmpty/ShoppingCartEmpty";
import ConfirmOrderModal from "./components/ConfirmOrderModal/ConfirmOrderModal";

function App() {
	const [cartContent, setCartContent] = useState([]);

	return (
		<>
			<section className="listWrapper">
				<MenuList />
			</section>

			{cartContent.length === 1 ? (
				<ShoppingCart cartContent={cartContent} />
			) : (
				<ShoppingCartEmpty />
			)}

			<ConfirmOrderModal />
			
		</>
	);
}

export default App;
