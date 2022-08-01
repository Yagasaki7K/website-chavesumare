import HeaderDetails from './HeaderDetails'

const Header = () => {
  return (
    <HeaderDetails>
        <img src="/logotipo-transp.png" alt="Chaveiro Sumaré"/>
        <h1>Atendimento 24 horas</h1>

        <div className="buttons">
            <a href="#aboutus" className="aboutus"><i class="uil uil-info-circle"></i> Saiba mais ...</a>
            <a href="#aboutus" className="whatsapp"><i class="uil uil-whatsapp"></i> Whatsapp</a>
        </div>
    </HeaderDetails>
  )
}

export default Header