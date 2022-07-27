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

                <p><i class="uil uil-map-marker-alt"></i> Rua das Letras, 123, Sumaré</p>
                <p><i class="uil uil-phone"></i> +55 19 99999-9999</p>
                <p><i class="uil uil-envelope"></i> exemplo@email.com.br</p>
            </div>
            <div className="rightContainer">
                <a href=""><i class="uil uil-whatsapp"></i> Envie um "HELP" no Whatsapp!</a>
            </div>
        </div>
    </FooterDetails>
  )
}

export default Footer