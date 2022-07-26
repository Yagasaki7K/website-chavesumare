import styled from 'styled-components'

const HeaderDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: url(https://i.pinimg.com/originals/aa/21/b3/aa21b3255f9b579d259d176e3d3fbcda.jpg) no-repeat;
    background-size: 130rem;
    object-fit: cover;
    height: 65rem;

    @media (max-width: 1366px) {
        height: 44.23rem;
    }
    @media (max-width: 1024px) {
        height: 68.2rem;
    }
    @media (max-width: 728px) {
        height: 50rem;
    }
    @media (max-width: 600px) {
        height: 53.3rem;
    }
    @media (max-width: 414px) {
        height: 49rem;
    }
    @media (max-width: 375px) {
        height: 44.4rem;
    }

    h2 {
        margin-top: 0rem;
        margin-bottom: 30rem;
        text-transform: uppercase;
        margin-bottom: -2rem;
        color: #d3cfc9;
        text-shadow: 0px 0px 10px #181a1b;
        font-size: 2rem;
    }

    h1 {
        font-size: 4rem;

        @media (max-width: 768px) {
            font-size: 3rem;
        }
        @media (max-width: 600px) {
            font-size: 2.5rem;
        }
        @media (max-width: 414px) {
            font-size: 1.75rem;
        }
        @media (max-width: 375px) {
            font-size: 1.5rem;
        }

        margin-bottom: 1rem;
        text-shadow: 0px 0px 10px #181a1b;
        border-radius: 15px;
        padding: 1rem;
    }

    a {
        background: #ee393f;
        color: #d3cfc9;
        border: none;
        border-radius: 10px;
        padding: 1rem;
        font-size: 1rem;
        font-weight: bold;
        cursor: pointer;
        text-decoration: none;
    }
`

export default HeaderDetails