import checkIcon from "../../assets/images/icon-order-confirmed.svg";
import styles from "./ConfirmOrderModal.module.css";
import {
	CartContentType,
	MenuItemType,
	setAddToCartButtonActiveType,
	SetCartContentType,
	SetConfirmModalOpenType,
} from "../../types";
import { useContext } from "react";
import ConfirmOrderItem from "../ConfirmOrderItem/ConfirmOrderItem";
import { MenuContext } from "../DessertProvider/DessertProvider";

/** Component to display order-confirmation with items */
const ConfirmOrderModal: React.FC<{
	setCartContent: SetCartContentType;
	setConfirmModalOpen: SetConfirmModalOpenType;
	cartContent: CartContentType;
	setAddToCartButtonActive: setAddToCartButtonActiveType;
	
}> = ({ setCartContent, setConfirmModalOpen, cartContent, setAddToCartButtonActive }) => {
	const handleStartNewOrder = () => {		
		setCartContent([]);
		setConfirmModalOpen(false);
		setAddToCartButtonActive(null)
	};

	/** Get menuArray from context */
	const context = useContext(MenuContext);
	if (!context) {
		throw new Error("Cannot use menuarray outside context");
	}
	const { menuArray } = context;

	return (
		<div className={styles.confirmOrderModalBackdrop}>
			<div className={styles.confirmOrderModal}>
				<img src={checkIcon} alt="check" />
				<div>
					<h1>Order Confirmed</h1>
					<p>We hope you enjoy your food</p>
				</div>
				<ul>
					{/* Dymically rendered cart items */}
					{menuArray.map((menuItem: MenuItemType, index: number) => {
						for (const cartItem of cartContent) {
							if (cartItem.menuItemNum === index) {
								return (
									<ConfirmOrderItem
										menuItem={menuItem}
										index={index}
										cartItem={cartItem}
										key={index}
									/>
								);
							}
						}
					})}
				</ul>
				<button onClick={handleStartNewOrder}>Start New Order</button>
			</div>
		</div>
	);
};

export default ConfirmOrderModal;
