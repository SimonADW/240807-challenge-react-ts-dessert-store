import cakeIllustration from '../../assets/images/illustration-empty-cart.svg'
import styles from './ShoppingCartEmpty.module.css';

/** Placeholder-component for empty shopping cart */
const ShoppingCartEmpty = () => {
  return (
	<div className={styles.cartEmpty}>
		<h1>Your Cart (0)</h1>
		<img src={cakeIllustration} alt="cake illustration" />
		<p>Your added items will appear here</p>
	</div>
  )
}

export default ShoppingCartEmpty