import { useState } from "react";
import "./App.css";
import MenuList from "./components/MenuList/MenuList";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import ShoppingCartEmpty from "./components/ShoppingCartEmpty/ShoppingCartEmpty";
import ConfirmOrderModal from "./components/ConfirmOrderModal/ConfirmOrderModal";
import { CartContentType } from "./types";

function App() {
	const [cartContent, setCartContent] = useState<CartContentType>([{menuItemNum: 2, qty: 2}]);

	return (
		<>
			<section className="listWrapper">
				<MenuList />
			</section>

			{cartContent ? (
				<ShoppingCart cartContent={cartContent} setCartContent={setCartContent}  />
			) : (
				<ShoppingCartEmpty />
			)}

			<ConfirmOrderModal />
			
		</>
	);
}

export default App;
