import OurServicesDetails from './OurServicesDetails';

const OurServices = () => {
  return (
    <OurServicesDetails>
        <h4>Our Services</h4>
        <h1>What We Offer</h1>

        <div className="services">
            <div className="service">
                <i class="uil uil-key-skeleton"></i>
                <p>Dry Cleaning</p>
            </div>
            <div className="service">
                <i class="uil uil-car-sideview"></i>
                <p>Wash and Fold</p>
            </div>
            <div className="service">
                <i class="uil uil-lock"></i>
                <p>Wash and Fold</p>
            </div>
            <div className="service">
                <i class="uil uil-keyhole-circle"></i>
                <p>Wash and Fold</p>
            </div>
        </div>
    </OurServicesDetails>
  )
}

export default OurServices