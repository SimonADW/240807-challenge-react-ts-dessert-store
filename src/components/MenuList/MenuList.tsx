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
		<section className={styles.listWrapper}>
			<h1>Desserts</h1>
			<div className={styles.menuList}>
			{
				menuArray.map((item, index)=> {	
					return <MenuItem item={item} key={index} />
				})
			}	
			</div>
		</section>
	</>
  )
}

export default MenuList