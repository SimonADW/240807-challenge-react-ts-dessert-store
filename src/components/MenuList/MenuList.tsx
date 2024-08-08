import React, { useContext } from 'react'
import { MenuContext } from '../DessertProvider/DessertProvider'
import { MenuItem } from '../MenuItem/MenuItem';

/** Renders list of MenuItems */

const MenuList = () => {
	const context = useContext(MenuContext);	
	if(!context) {
		throw new Error("Cannot use MenuArray outside context");
	}
	
	const { menuArray } = context

  return (
	<>	
		<p>Hello from List</p>
		{
			menuArray.map((item, index)=> {	
				return <MenuItem item={item} key={index} />
			})
		}	
	</>
  )
}

export default MenuList