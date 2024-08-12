import React, {useContext, useEffect, useState} from "react";
import removeItemIcon from "../../assets/images/icon-remove-item.svg";
import carbonNeutralImage from "../../assets/images/icon-carbon-neutral.svg";
import styles from "./ShoppingCart.module.css";
import { CartContentType } from "../../types";
import { MenuContext } from "../DessertProvider/DessertProvider";

const ShoppingCart: React.FC<{
	cartContent: CartContentType;
	// @TODO: Fix setter type
	setCartContent: React.Dispatch<React.SetStateAction<() => void >>;
}> = ({ cartContent, setCartContent }) => {
	const [orderSumTotal, setOrderSumTotal] = useState<number>(0)

	const context = useContext(MenuContext);
	if(!context) {
		throw new Error("Cannot use MenuArray outside context");
	}	
	const { menuArray } = context
	
	useEffect(()=> {
		const newOrderSumTotal = cartContent?.reduce((sum, cartItem) => {
			const menuItem = menuArray.find((index =>  Number(index) === cartItem.menuItemNum))
			return menuItem ? sum + (cartItem.qty * menuItem.price) : sum ;
		}, 0)

		setOrderSumTotal(newOrderSumTotal)
	}, [cartContent, menuArray])
	
	return (
		<>
			<div className={styles.cart}>
				<h1>Your Cart (0)</h1>

				<ul>
					{/* Dynamically rendered: */}					

					{menuArray.map((item, index)=> {
						for (const cartItem of cartContent) {
							if(cartItem.menuItemNum === index) {								
								return (
								<li className={styles.cartIsstem} key={index}>
									<div className={styles.cartItemNamePriceWrapper}>
										<p className={styles.cartItemName}>
											{item.name}
										</p>
										<div className={styles.cartItemPriceWrapper}>
											<span className={styles.cartItemQty}>{cartItem.qty}</span>
											<span className={styles.cartItemAt}>@</span>
											<span className={styles.cartItemPrice}>
												{item.price.toFixed(2)}
											</span>
											<span className={styles.cartItemPartSum}>
												{(item.price * cartItem.qty).toFixed(2)}
											</span>
										</div>
									</div>
									<button className={styles.removeCartItemButton}>
										<img src={removeItemIcon} alt="x" />
									</button>
								</li>
								)
							}
						}						
					})}				

					<li className={styles.orderTotalLi}>
						<span>Sum</span>
						<span className={styles.orderTotalSum}>{orderSumTotal}</span>
					</li>
				</ul>

				<div className={styles.carbonNeutralStatement}>
					<img src={carbonNeutralImage} alt="tree" />
					<span>
						This is a <strong>carbon neutral</strong> delivery
					</span>
				</div>
				<button className={styles.confirmOrderButton}>
					Confirm Order
				</button>
			</div>
		</>
	);
};

export default ShoppingCart;
