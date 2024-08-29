import React, { useContext, useState } from 'react'
import { MenuContext } from '../DessertProvider/DessertProvider'
import { MenuItem } from '../MenuItem/MenuItem';
import styles from '../MenuList/MenuList.module.css';
import { CartContentType, SetCartContentType } from '../../types';

/** Renders list of MenuItems */
const MenuList: React.FC<{setCartContent: SetCartContentType, cartContent: CartContentType}> = ({setCartContent, cartContent}) => {
	const [addToCartButtonActive, setAddToCartButtonActive] = useState<number | null>(null)
	const context = useContext(MenuContext);	
	if(!context) {
		throw new Error("Cannot use MenuArray outside context");
	}
	
	const { menuArray } = context;

  return (
	<>			
		<h1 className={styles.dessertHeader}>Desserts</h1>
		<div className={styles.menuList}>
		{
			menuArray.map((item, index)=> {	
				return <MenuItem item={item} key={index} index={index} addToCartButtonActive={addToCartButtonActive} setAddToCartButtonActive={setAddToCartButtonActive} setCartContent={setCartContent} cartContent={cartContent} />
			})
		}	
		</div>
	</>
  )
}

export default MenuList