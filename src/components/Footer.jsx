import FooterDetails from './FooterDetails'

const Footer = () => {
  return (
    <FooterDetails>
        <img src="/logotipo.png" alt="Chaveiro Sumaré" />

        <div className="footer-content">
            <div className="leftContainer">
                <h1>Chaveiro Sumaré</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aliquam corporis sapiente necessitatibus ullam, delectus cupiditate totam numquam sint! Libero tempora error voluptate soluta unde nisi dicta distinctio architecto enim.</p>
            </div>
            <div className="middleContainer">
                <h2>Entre em contato</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, reprehenderit vel labore a at cum quo ratione. 
                </p>

                <p><i class="uil uil-map-marker-alt"></i> Rua das Letras, 123, Sumaré</p>
                <p><i class="uil uil-phone"></i> +55 19 99999-9999</p>
                <p><i class="uil uil-envelope"></i> exemplo@email.com.br</p>
            </div>
            <div className="rightContainer">
                <a href=""><i class="uil uil-whatsapp"></i> Envie uma mensagem no Whatsapp!</a>
            </div>
        </div>
    </FooterDetails>
  )
}

export default Footer