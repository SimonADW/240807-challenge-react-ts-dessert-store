import React, { useEffect, useState } from "react";

import { CartItemType, MenuItemType } from "../../types";
import styles from "./ConfirmOrderItem.module.css";

/** Item in confirm order modal */
const ConfirmOrderItem: React.FC<{
	menuItem: MenuItemType;
	index: number;
	cartItem: CartItemType;
}> = ({ menuItem, index, cartItem }) => {
	const [thumbImageSrc, setThumbImageSrc] = useState<string>("");
	/**  Import thumbnail image  */
	useEffect(() => {
		const importImage = async () => {
			try {
				import(/* @vite-ignore */ `${menuItem.image.thumbnail}`).then(
					(image) => {
						setThumbImageSrc(image.default);
					}
				);
			} catch {
				throw new Error("Unable to get image path");
			}
		};

		importImage();
	}, [menuItem.image.thumbnail]);

	return (
		<li key={index} className={styles.summaryItemLi}>
			<img src={thumbImageSrc} alt="thumbnail" />
			<div className={styles.listItem__namePriceWrapper}>
				<span>{menuItem.name}</span>
				<div>
					<span className={styles.itemQty}>{cartItem.qty}</span>
					<span className={styles.itemPrice}>{menuItem.price}</span>
				</div>
			</div>
			<div className={styles.itemTotal}>
				{cartItem.qty * menuItem.price}
			</div>
		</li>
	);
};

export default ConfirmOrderItem;
