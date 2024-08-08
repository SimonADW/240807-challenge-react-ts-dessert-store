import React, { useContext, useState } from 'react'
import { MenuContext } from '../DessertProvider/DessertProvider'
import { MenuItem } from '../MenuItem/MenuItem';
import styles from '../MenuList/MenuList.module.css';

/** Renders list of MenuItems */

const MenuList = () => {
	const [addToCartButtonActive, setAddToCartButtonActive] = useState<number>(0)
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
					return <MenuItem item={item} key={index} index={index} addToCartButtonActive={addToCartButtonActive} setAddToCartButtonActive={setAddToCartButtonActive} />
				})
			}	
			</div>
		</section>
	</>
  )
}

export default MenuList