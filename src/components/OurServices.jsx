import OurServicesDetails from './OurServicesDetails';

const OurServices = () => {
  return (
    <OurServicesDetails>
        <h4>Nossos serviços</h4>
        <h1>O que oferecemos!</h1>

        <div className="services">
            <div className="service">
                <i class="uil uil-key-skeleton"></i>
                <p>Instalação</p>
            </div>
            <div className="service">
                <i class="uil uil-car-sideview"></i>
                <p>Desbloqueio</p>
            </div>
            <div className="service">
                <i class="uil uil-lock"></i>
                <p>Controles</p>
            </div>
            <div className="service">
                <i class="uil uil-keyhole-circle"></i>
                <p>Autenticidade</p>
            </div>
        </div>
    </OurServicesDetails>
  )
}

export default OurServices