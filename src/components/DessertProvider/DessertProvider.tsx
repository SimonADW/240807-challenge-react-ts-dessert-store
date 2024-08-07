import { createContext, ReactNode, useState } from 'react'
import menuData from "../../assets/data.json"
import { MenuItemType } from '../../types'

/** Context-provider of menuData for whole app */

type MenuContextType = {
	menuArray: MenuItemType[];
	setMenuArray: React.Dispatch<React.SetStateAction<MenuItemType[]>>;
}

export const MenuContext = createContext<MenuContextType | undefined>(undefined)

type DessertProviderProps = {
	children: ReactNode
}

const DessertProvider: React.FC<DessertProviderProps> = ({ children }) => {
	const [menuArray, setMenuArray] = useState<MenuItemType[]>(menuData)	
	
  return (
	<MenuContext.Provider value={{menuArray, setMenuArray}}>
		{children}
	</MenuContext.Provider>
  )
}

export default DessertProvider