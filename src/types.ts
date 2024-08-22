import React from "react";

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
	addToCartButtonActive: number;
	setAddToCartButtonActive: React.Dispatch<React.SetStateAction<number>>;
	setCartContent: SetCartContentType;
};

export type CurrentDeviceType =	'thumbnail' | 'mobile' | 'tablet' | 'desktop';

export type CartContentType = {	
	menuItemNum: number;
	qty: number;
}[];


export type SetCartContentType = React.Dispatch<React.SetStateAction<CartContentType>>
export type SetConfirmModalOpenType = React.Dispatch<React.SetStateAction<boolean>>