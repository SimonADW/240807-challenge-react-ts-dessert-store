import React, { useEffect, useState } from "react";

import { CartItemType, ImageModule, MenuItemType } from "../../types";
import styles from "./ConfirmOrderItem.module.css";

/** Item in confirm order modal */
const ConfirmOrderItem: React.FC<{
	menuItem: MenuItemType;
	index: number;
	cartItem: CartItemType;
}> = ({ menuItem, index, cartItem }) => {
	const [thumbImageSrc, setThumbImageSrc] = useState<string>("");


	/** Get function that imports correct image */
	const getImages = () => {
		return import.meta.glob("../../assets/images/*.jpg") as Record<
			string,
			() => Promise<ImageModule>
		>;
	};
	
	/**  Import thumbnail image  */
	useEffect(() => {
		const importImage = async () => {
			try {
				const imagePath = menuItem.image["thumbnail"];

				const images = getImages()

				const importer = images[imagePath]
				if(importer) {
					const image = await importer();
					setThumbImageSrc(image.default);
				} else {
					throw new Error("Unable to fetch thumbnail-image");
				}
			} catch(error) {
				if(error instanceof Error) {
					console.error("Unable to get image path", error.message);
				} else {
					console.error("Unexpected error", error);
				}
			}
		};

		importImage();
	}, [menuItem.image]);

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
