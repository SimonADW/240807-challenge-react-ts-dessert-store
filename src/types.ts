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

export type CurrentDeviceType =	'thumbnail' | 'mobile' | 'tablet' | 'desktop';