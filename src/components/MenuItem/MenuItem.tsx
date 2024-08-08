import React, { useEffect, useState } from "react";
import { MenuItemType, CurrentDeviceType } from "../../types";
import styles from "./MenuItem.module.css";

type menuItemProps = {
	item: MenuItemType;
	index: number;
	addToCartButtonActive: number;
	setAddToCartButtonActive: React.Dispatch<React.SetStateAction<number>>;
};

/** Single Item in menu, props from map`ed array in MenuList */

export const MenuItem: React.FC<menuItemProps> = ({
	item,
	index,
	addToCartButtonActive,
	setAddToCartButtonActive,
}) => {
	const [imageSrc, setImageSrc] = useState<string>("");
	const [currentDevice, setCurrentDevice] =
		useState<CurrentDeviceType>("mobile");

	/** Update image path based on device (innerWidth) */
	const updateDeviceType = () => {
		if (innerWidth <= 480) {
			setCurrentDevice("mobile");
		} else if (innerWidth <= 768) {
			setCurrentDevice("tablet");
		} else {
			setCurrentDevice("desktop");
		}
	};

	useEffect(() => {
		updateDeviceType();

		const handleResize = () => {
			updateDeviceType();
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

  /**  Import image based on device */
	useEffect(() => {
		const importImage = async () => {
			try {
				import(`${item.image[currentDevice]}`).then((image) => {
					setImageSrc(image.default);
				});
			} catch {
				throw new Error("Unable to get image path");
			}
		};

		importImage();
	}, [currentDevice, item.image]);

	return (
		<div className={styles.menuItem}>
			<img src={imageSrc} alt={item.name} />
			{
				// Render select amount buttons when add to cart clicked
				addToCartButtonActive === index ? (
					<div className={styles.addToCartButtonActive}>
						<button className={styles.addToCartDecrement}>-</button>
						<span>1</span>
						<button className={styles.addToCartIncrement}>+</button>
					</div>
				) : (
					<button onClick={() => setAddToCartButtonActive(index)}>
						Add to Cart
					</button>
				)
			}

			<div className={styles.itemCategory}>{item.category}</div>
			<div className={styles.itemName}>{item.name}</div>
			<div className={styles.itemPrice}>{item.price.toFixed(2)}</div>
		</div>
	);
};
