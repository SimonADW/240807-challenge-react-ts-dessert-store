import { createContext, useState } from 'react'
import menuData from "../../assets/data.json"
import { MenuItemType, DessertProviderProps, MenuContextType } from '../../types'

export const MenuContext = createContext<MenuContextType | undefined>(undefined)

/** Context-provider of menuData for whole app */
const DessertProvider: React.FC<DessertProviderProps> = ({ children }) => {
	const [menuArray, setMenuArray] = useState<MenuItemType[]>(menuData)	
	
  return (
	<MenuContext.Provider value={{menuArray, setMenuArray}}>
		{children}
	</MenuContext.Provider>
  )
}

export default DessertProvider