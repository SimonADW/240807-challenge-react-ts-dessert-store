import React, { useContext } from 'react'
import { MenuContext } from '../DessertProvider/DessertProvider'
import { MenuItem } from '../MenuItem/MenuItem';
import styles from '../MenuList/MenuList.module.css';

/** Renders list of MenuItems */

const MenuList = () => {
	const context = useContext(MenuContext);	
	if(!context) {
		throw new Error("Cannot use MenuArray outside context");
	}
	
	const { menuArray } = context

  return (
	<>	
		<div className={styles.menuList}>
		{
			menuArray.map((item, index)=> {	
				return <MenuItem item={item} key={index} />
			})
		}	
		</div>
	</>
  )
}

export default MenuList