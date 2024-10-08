import React, {ReactNode} from "react";

export type MenuContextType = {
	menuArray: MenuItemType[];
	setMenuArray: React.Dispatch<React.SetStateAction<MenuItemType[]>>;
}

export type DessertProviderProps = {
	children: ReactNode
}

export type MenuItemType = {
	image: {
	  thumbnail: string;
	  mobile: string;
	  tablet: string;
	  desktop: string;
	};
	name: string;
	category: string;
	price: number;
  };

export type MenuItemProps = {
	item: MenuItemType;
	index: number;
	addToCartButtonActive:addToCartButtonActiveType;
	setAddToCartButtonActive: setAddToCartButtonActiveType;
	cartContent: CartContentType;
	setCartContent: SetCartContentType;	
};

export type CurrentDeviceType =	'thumbnail' | 'mobile' | 'tablet' | 'desktop';

export type ImageModule = {
	default: string; // URL of the image
};

export type CartContentType = {	
	menuItemNum: number;
	qty: number;
}[];

export type CartItemType = {	
	menuItemNum: number;
	qty: number;
};

export type SetCartContentType = React.Dispatch<React.SetStateAction<CartContentType>>
export type SetConfirmModalOpenType = React.Dispatch<React.SetStateAction<boolean>>

export type addToCartButtonActiveType = number | null
export type setAddToCartButtonActiveType = React.Dispatch<React.SetStateAction<number | null>>


