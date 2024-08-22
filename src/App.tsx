import { useState } from "react";
import "./App.css";
import MenuList from "./components/MenuList/MenuList";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import ShoppingCartEmpty from "./components/ShoppingCartEmpty/ShoppingCartEmpty";
import ConfirmOrderModal from "./components/ConfirmOrderModal/ConfirmOrderModal";
import { CartContentType } from "./types";

function App() {
	const [cartContent, setCartContent] = useState<CartContentType>([{menuItemNum: 2, qty: 2}, {menuItemNum: 3, qty: 2}]);
	const [confirmOrderModalOpen, setConfirmModalOpen] = useState(false)


	return (
		<>
			<section className="listWrapper">
				<MenuList />
			</section>

			{cartContent[0].menuItemNum === 0 ? (
			<ShoppingCartEmpty />
			) : (
			<ShoppingCart cartContent={cartContent} setCartContent={setCartContent} setConfirmModalOpen={setConfirmModalOpen} />
			)}

			{confirmOrderModalOpen
			&&
			<ConfirmOrderModal setCartContent={setCartContent} setConfirmModalOpen={setConfirmModalOpen}/>			
			}
			
		</>
	);
}

export default App;
