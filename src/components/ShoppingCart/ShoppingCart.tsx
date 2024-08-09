import React from "react";
import removeItemIcon from "../../assets/images/icon-remove-item.svg";
import carbonNeutralImage from "../../assets/images/icon-carbon-neutral.svg";
import styles from "./ShoppingCart.module.css";

const ShoppingCart = () => {
	return (
		<>
			<div className={styles.cart}>
				<h1>Your Cart (0)</h1>

				<ul>
					{/* Dynamically rendered: */}
					<li className={styles.cartItem}>
						<div className={styles.cartItemNamePriceWrapper}>
							<p className={styles.cartItemName}>Classic Tiramisu</p>
							<div className={styles.cartItemPriceWrapper}>
								<span className={styles.cartItemQty} >2x</span>
								<span className={styles.cartItemAt}>@</span>
								<span className={styles.cartItemPrice} >5.50</span>
								<span className={styles.cartItemPartSum} >11.00</span>
							</div>
						</div>
						<button className={styles.removeCartItemButton}>
							<img src={removeItemIcon} alt="x" />
						</button>						
					</li>

					<li className={styles.orderTotalLi}>
						<span>Order Total</span>
						<span className={styles.orderTotalSum}>11.00</span>
					</li>

				</ul>

				<div className={styles.carbonNeutralStatement}>
					<img src={carbonNeutralImage} alt="tree" />
					<span>This is a <strong>carbon neutral</strong> delivery</span>
				</div>
				<button className={styles.confirmOrderButton}>Confirm Order</button>
			</div>
		</>
	);
};

export default ShoppingCart;
