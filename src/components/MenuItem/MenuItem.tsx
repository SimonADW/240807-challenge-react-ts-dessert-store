import React, { useEffect, useState } from "react";
import { MenuItemProps, CurrentDeviceType, ImageModule } from "../../types";
import styles from "./MenuItem.module.css";

/** Single Item in menu, props from map`ed array in MenuList */
export const MenuItem: React.FC<MenuItemProps> = ({
	item,
	index,
	addToCartButtonActive,
	setAddToCartButtonActive,
	cartContent,
	setCartContent,
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

	/** Get images with the correct type */
	const getImages = () => {
		return import.meta.glob("../../assets/images/*.jpg") as Record<
			string,
			() => Promise<ImageModule>
		>;
	};

	/**  Import image based on device */
	const importImage = async () => {
		try {
			const imagePath = item.image[currentDevice];

			const images = getImages();

			const importer = images[imagePath];
			if (importer) {
				const image = await importer();
				setImageSrc(image.default);
			} else {
				throw new Error("Unable to get image path");
			}
		} catch (error) {
			if (error instanceof Error) {
				console.error("Error importing image", error.message);
			} else {
				console.error("Unexpected error", error);
			}
		}
	};

	useEffect(() => {
		importImage();
	}, [currentDevice, item.image]);

	const addItemToCart = () => {
		setCartContent((prev) => {
			const updatedCart = [...prev];
			const itemIndex = updatedCart.findIndex(
				(cartItem) => cartItem.menuItemNum === index
			);
			if (itemIndex === -1) {
				updatedCart.push({ menuItemNum: index, qty: 1 });
			} else {
				updatedCart[itemIndex].qty += 1;
			}
			return updatedCart;
		});
	};

	const subtractItemFromCart = () => {
		setCartContent((prev) => {
			const updatedCart = [...prev];
			const itemIndex = updatedCart.findIndex(
				(cartItem) => cartItem.menuItemNum === index
			);
			if (itemIndex !== -1) {
				updatedCart[itemIndex].qty -= 1;
				if (updatedCart[itemIndex].qty === 0) {
					updatedCart.splice(itemIndex, 1);
				}
			}
			return updatedCart;
		});
	};

	const getNumOfCurrentItemInCart = (index: number): number => {
		const currentCartItem = cartContent.find(
			(cartItem) => cartItem.menuItemNum === index
		);
		return currentCartItem ? currentCartItem.qty : 0;
	};

	return (
		<div className={styles.menuItem}>
			<img src={imageSrc} alt={item.name} />
			{
				// Render select amount buttons when add to cart clicked, or if item is in cart

				getNumOfCurrentItemInCart(index) ||
				addToCartButtonActive === index ? (
					<div className={styles.addToCartButtonActive}>
						<button
							onClick={subtractItemFromCart}
							className={styles.addToCartDecrement}
						>
							-
						</button>
						<span>{getNumOfCurrentItemInCart(index)}</span>
						<button
							onClick={addItemToCart}
							className={styles.addToCartIncrement}
						>
							+
						</button>
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
