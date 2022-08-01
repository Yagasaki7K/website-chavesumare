import styled from 'styled-components'

const HeaderDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: url(https://images5.alphacoders.com/456/thumb-1920-456536.jpg) no-repeat;
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

    img {
        margin-top: -14rem;
        margin-bottom: -7rem;
    }

    h1 {
        font-size: 4rem;
        text-transform: uppercase;

        @media (max-width: 768px) {
            font-size: 1rem;
            padding: 1rem 0;
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
        color: #fff;
    }

    a {
        color: #d3cfc9;
        border: none;
        border-radius: 5px;
        padding: 1rem;
        font-size: 1rem;
        font-weight: bold;
        cursor: pointer;
        text-decoration: none;
    }

    .aboutus {
        background: #b92c30;
        margin-right: 1rem;

        :hover {
            transition: 1s;
            color: #fff;
            background: #ee393f;
        }
    }

    .whatsapp {
        background: #2f9b3b;

        :hover {
            transition: 1s;
            color: #fff;
            background: #4dcb5b;
        }
    }
`

export default HeaderDetails