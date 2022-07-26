import PricingPlanDetails from './PricingPlanDetails'

const PricingPlan = () => {
  return (
    <PricingPlanDetails>
        <h4>Nossos serviços</h4>
        <h1>Vão muito além, como: </h1>

        <div className="plans">
            <div className="plan">
                <div className="header-plan gold">
                    <h2>Chaves</h2>
                    <p><i class="uil uil-key-skeleton"></i></p>
                </div>

                <ul>
                    <li>Afiação</li>
                    <li>Chaves Codificadas</li>
                    <li>Abertura de fechadura</li>
                    <li>Cópias de chaves residenciais</li>
                </ul>
                <a href="https://api.whatsapp.com/send?phone=5519981480355&text=Ol%C3%A1%2C%20preciso%20de%20uma%20ajuda!"><i class="uil uil-message"></i> Entre em contato</a>
            </div>

            <div className="plan">
                <div className="header-plan silver">
                    <h2>Instalação</h2>
                    <p><i class="uil uil-setting"></i></p>
                </div>

                <ul>
                    <li>Instalação de Fechaduras</li>
                    <li>Fechaduras eletrônicas</li>
                    <li>Controle para portões elétricos</li>
                </ul>
                <a href="https://api.whatsapp.com/send?phone=5519981480355&text=Ol%C3%A1%2C%20preciso%20de%20uma%20ajuda!"><i class="uil uil-message"></i> Entre em contato</a>
            </div>

            <div className="plan">
                <div className="header-plan bronze">
                    <h2>Veicular</h2>
                    <p><i class="uil uil-car-sideview"></i></p>
                </div>

                <ul>
                    <li>Cópias de chaves veiculares</li>
                    <li>Chave de importados</li>
                    <li>Chave presença</li>
                    <li>Alarmes para Veículos</li>
                    <li>Emulador da Mercedes (Elv)</li>
                </ul>
                <a href="https://api.whatsapp.com/send?phone=5519981480355&text=Ol%C3%A1%2C%20preciso%20de%20uma%20ajuda!"><i class="uil uil-message"></i> Entre em contato</a>
            </div>
        </div>
    </PricingPlanDetails>
  )
}

export default PricingPlan