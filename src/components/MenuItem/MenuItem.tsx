import React, { useEffect, useState } from "react";
import { MenuItemType, CurrentDeviceType } from "../../types";
import styles from "./MenuItem.module.css";

type menuItemProps = {
	item: MenuItemType;
};

/** Single Item in menu, props from map`ed array in MenuList */

export const MenuItem: React.FC<menuItemProps> = ({ item }) => {
	const [imageSrc, setImageSrc] = useState<string>("");
	const [currentDevice, setCurrentDevice] = useState<CurrentDeviceType>("mobile");

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

	useEffect(() => {
    const importImage = async ()=> {
      try {
        import(`${item.image[currentDevice]}`).then((image) => {
          setImageSrc(image.default);
        });    
      } catch {
        throw new Error("Unable to get image path");
      }
    }

    importImage();
  }, [currentDevice, item.image]);

	return (
		<div className={styles.menuItem}>
			<img src={imageSrc} alt={item.name} />
			<button>Add to Cart</button>
			<div>{item.category}</div>
			<div>{item.name}</div>
			<div>{item.price.toFixed(2)}</div>
		</div>
	);
};
