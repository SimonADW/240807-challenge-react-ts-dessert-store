import React from 'react'
import { MenuItemType } from '../../types'

type menuItemProps = {
  item: MenuItemType;
}

/** Single Item in menu, props from map`ed array in MenuList */ 

export const MenuItem: React.FC<menuItemProps> = ({item}) => {  
  
  return (    
	  <div>
      <img src={`${item.image.mobile}`} alt={item.name} />
      <button>Add to Cart</button>
      <div>{item.category}</div>
      <div>{item.name}</div>
      <div>{item.price}</div>
    </div>
  )
}
