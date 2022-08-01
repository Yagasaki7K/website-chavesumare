import FooterDetails from './FooterDetails'

const Footer = () => {
  return (
    <FooterDetails>
        <a href="/">
            <img src="/logotipo.png" alt="Chaveiro Sumaré" />
        </a>

        <div className="footer-content">
            <div className="leftContainer">
                <h1>Chaveiro Sumaré</h1>
                <p>Atendemos você diretamente na sua casa, no seu escritório e até mesmo em casos de emergência como veículos trancados. <br/> Levando qualidade, segurança e profissionalismo em nossa bagagem com anos de experiência que só a Chaveiro Sumaré possuí!</p>
            </div>
            <div className="middleContainer">
                <h2>Entre em contato</h2>
                <p>
                    Você também pode apertar o botão do Whatsapp e entrar em contato direto com a gente!
                </p>

                <p><i class="uil uil-map-marker-alt"></i> Av. Emílio Bosco, 1100 (Jardim Morumbi / Nova Veneza) - Sumaré | No estacionamento do Supermercado Goodbom Matão</p>
                <p><i class="uil uil-phone"></i> <a href="https://api.whatsapp.com/send?phone=5519981480355&text=Ol%C3%A1%2C%20preciso%20de%20uma%20ajuda!">+55 19 98148-0355</a></p>
                <p><i class="uil uil-envelope"></i> chaveirosumare10@gmail.com</p>
            </div>
            <div className="rightContainer">
                <a href="https://api.whatsapp.com/send?phone=5519981480355&text=Ol%C3%A1%2C%20preciso%20de%20uma%20ajuda!"><i class="uil uil-whatsapp"></i> Envie um "HELP" no Whatsapp!</a>
            </div>
        </div>
    </FooterDetails>
  )
}

export default Footer