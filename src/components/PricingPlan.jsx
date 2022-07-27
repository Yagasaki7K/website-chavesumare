import PricingPlanDetails from './PricingPlanDetails'

const PricingPlan = () => {
  return (
    <PricingPlanDetails>
        <h4>Our pricing plan</h4>
        <h1>The Best Place</h1>

        <div className="plans">
            <div className="plan">
                <div className="header-plan">
                    <h2>Basic</h2>
                    <p>$10 / month</p>
                </div>

                <ul>
                    <li>Dry Cleaning</li>
                    <li>Wash and Fold</li>
                    <li>Wash and Fold</li>
                    <li>Wash and Fold</li>
                </ul>
                <button>Entrar em contato</button>
            </div>

            <div className="plan">
                <div className="header-plan">
                    <h2>Basic</h2>
                    <p>$10 / month</p>
                </div>

                <ul>
                    <li>Dry Cleaning</li>
                    <li>Wash and Fold</li>
                    <li>Wash and Fold</li>
                    <li>Wash and Fold</li>
                </ul>
                <button>Entrar em contato</button>
            </div>

            <div className="plan">
                <div className="header-plan">
                    <h2>Basic</h2>
                    <p>$10 / month</p>
                </div>

                <ul>
                    <li>Dry Cleaning</li>
                    <li>Wash and Fold</li>
                    <li>Wash and Fold</li>
                    <li>Wash and Fold</li>
                </ul>
                <button>Entrar em contato</button>
            </div>
        </div>
    </PricingPlanDetails>
  )
}

export default PricingPlan