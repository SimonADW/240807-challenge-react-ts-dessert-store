import React from 'react'
import checkIcon from '../../assets/images/icon-order-confirmed.svg';
import styles from './ConfirmOrderModal.module.css';

const ConfirmOrderModal = () => {
  return (
	<div className={styles.confirmOrderModal}>
		<img src={checkIcon} alt="check" />
		<div>
			<h1>Order Confirmed</h1>
			<p>We hope you enjoy your food</p>
		</div>
		<ul>
			{/* Dymically rendered list items */}
			<li className={styles.summaryItemLi}>				
				<img alt="thumbnail" />
				<div className={styles.listItem__namePriceWrapper}>
					<span>Classic Tiramusy</span>
					<div>
						<span className={styles.itemQty}>1</span>						
						<span className={styles.itemPrice}>5.50</span>
					</div>
				</div>
				<div className={styles.itemTotal}>5.50</div>
			</li>

		</ul>
		<button>Start New Order</button>
	</div>
  )
}

export default ConfirmOrderModal