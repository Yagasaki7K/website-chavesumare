import styled from 'styled-components'

const FooterDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
        @media (max-width: 414px) {
            width: 20rem;
        }
    }
    
    .footer-content {
        display: flex;
        justify-content: space-around;
        flex-direction: row;

        @media (max-width: 1024px) {
            flex-direction: column;
            align-items: center;
            width: 100%;
        }

        background: #ee393f;
        color: #ffffff;
        width: 100%;

        .leftContainer {
            flex-direction: column;
            width: 33rem;
            margin-left: 5rem;
            margin-right: 5rem;

            @media (max-width: 1024px) {
                margin-left: 0;
                margin-right: 0;
                overflow-x: hidden;
                text-align: center;
                width: 27rem;
            }

            @media (max-width: 414px) {
                width: 20rem;
            }

            h1 {
                text-transform: uppercase;
            }
        }

        .middleContainer {
            flex-direction: column;
            width: 30rem;

            h2 {
                text-transform: uppercase;
            }

            @media (max-width: 1024px) {
                text-align: center;
                width: 27rem;
            }

            @media (max-width: 414px) {
                width: 20rem;
            }   

            a {
                color: #fff;
                text-decoration: none;
            }
        }

        .rightContainer {
            flex-direction: column;
            width: 33rem;
            margin-left: 5rem;
            padding-top: 6rem;

            @media (max-width: 1024px) {
                padding-top: 3rem;
                padding-bottom: 3rem;
                margin-left: 0;
                text-align: center;
                width: 27rem;
            }

            a {
                text-decoration: none;
                color: #fff;
                padding: 2rem;
                background: #2f9b3b;
                border-radius: 15px;

                :hover {
                    background: #4dcb5b;
                    transition: 1s;
                }
            }
        }
    }
`

export default FooterDetails