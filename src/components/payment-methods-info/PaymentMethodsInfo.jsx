import React from "react"

import creditCardIcon from "../../assets/svgs/credit-card.svg"
import debitCardIcon from "../../assets/svgs/debit-card.svg"
import paymentAgreementIcon from "../../assets/svgs/payment-agreement.svg"
import viewMoreIcon from "../../assets/svgs/view-more.svg"

export const PaymentMethodsInfo = () => {
	return (
		<div className="payment-methods-ctn">
			<ul className="payment-methods-info">
				<li>
					<img src={creditCardIcon} alt="" />
					<div>
						<p>Hasta 14 cuotas sin interés</p>
						<a>Ver más</a>
					</div>
				</li>
				<li>
					<img src={debitCardIcon} alt="" />
					<div>
						<p>Tarjeta de débito</p>
						<a>Ver más</a>
					</div>
				</li>
				<li>
					<img src={paymentAgreementIcon} alt="" />
					<div>
						<p>Efectivo en redes de cobranza</p>
						<a>Ver más</a>
					</div>
				</li>
				<li>
					<img src={viewMoreIcon} alt="" />
					<div>
						<p>Más medios de pago</p>
						<a>Ver más</a>
					</div>
				</li>
			</ul>
		</div>
	)
}
