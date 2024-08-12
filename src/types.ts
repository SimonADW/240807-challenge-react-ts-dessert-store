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
};

export type CurrentDeviceType =	'thumbnail' | 'mobile' | 'tablet' | 'desktop';

export type CartContentType = {	
	menuItemNum: number;
	qty: number;
	
}[] | undefined;