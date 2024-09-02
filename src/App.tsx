import { useState } from "react";
import "./App.css";
import MenuList from "./components/MenuList/MenuList";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import ShoppingCartEmpty from "./components/ShoppingCartEmpty/ShoppingCartEmpty";
import ConfirmOrderModal from "./components/ConfirmOrderModal/ConfirmOrderModal";
import { CartContentType } from "./types";

function App() {
	const [cartContent, setCartContent] = useState<CartContentType>([]);
	const [confirmOrderModalOpen, setConfirmModalOpen] = useState(false)
	const [addToCartButtonActive, setAddToCartButtonActive] = useState<number | null>(null)


	return (
		<>
			<section className="listWrapper">
				<MenuList setCartContent={setCartContent} cartContent={cartContent} addToCartButtonActive={addToCartButtonActive} setAddToCartButtonActive={setAddToCartButtonActive} />
			</section>

			{cartContent.length ? (
				<ShoppingCart cartContent={cartContent} setCartContent={setCartContent} setConfirmModalOpen={setConfirmModalOpen} />
			) : (
				<ShoppingCartEmpty />
			)}

			{confirmOrderModalOpen
			&&
			<ConfirmOrderModal setCartContent={setCartContent} setConfirmModalOpen={setConfirmModalOpen} cartContent={cartContent} setAddToCartButtonActive={setAddToCartButtonActive}/>			
			}
			
		</>
	);
}

export default App;
