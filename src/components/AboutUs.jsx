import AboutUsDetails from './AboutUsDetails';

const AboutUs = () => {
    return (
        <AboutUsDetails>
            <div className="leftContent" id="aboutus">
                <img src="/logotipo.png" alt="Chaveiro Sumaré" />
            </div>
            <div className="rightContent">
                <h4>Nossa história</h4>
                <h1>Chaveiro Sumaré desde 2007 atual no mercado com segurança e qualidade</h1>
                
                <i>Atendemos em nossa loja e também através do Whatsapp</i>

                <p>Atendemos você diretamente na sua casa, no seu escritório e até mesmo em casos de emergência como veículos trancados, levando até você segurança, profissionalismo e qualidade que só a Chaveiro Sumaré possuí</p>
            </div>
        </AboutUsDetails>
    )
}

export default AboutUs