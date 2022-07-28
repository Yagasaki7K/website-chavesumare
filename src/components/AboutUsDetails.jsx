import styled from 'styled-components'

const AboutUsDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 1rem;

    @media (max-width: 730px) {
        flex-direction: column;
    }

    .leftContent {
        margin-right: 2rem;
        max-width: 30rem;

        @media (max-width: 730px) {
            img {
                width: 23rem;
            }
        }

        @media (max-width: 414px) {
            margin-left: 1.6rem;
        }

        @media (max-width: 375px) {
            img {
                width: 20rem;
            }
        }

    }

    .rightContent {
        width: 40rem;

        @media (max-width: 1366px) {
            width: 35rem;
        }

        @media (max-width: 730px) {
            h1 {
                margin-left: 1rem;
                width: 25rem;
            }

            h4 {
                margin-left: 1rem;
                width: 25rem;
            }

            i {
                display: none;
            }

            p {
                width: 20rem;
                margin-left: 1rem;
            }
        }

        @media (max-width: 600px) {
            h1 {
                width: 32rem;
            }

            p {
                width: 30rem;
            }
        }

        @media (max-width: 414px) {
            h1, p, h4 {
                width: 22rem;
                margin-left: 6rem;
            }
        }

        @media (max-width: 320px) {
            h1, p, h4 {
                width: 17rem;
                margin-left: 9rem;
            }
        }

        h4 {
            text-transform: uppercase;
            margin-bottom: -1rem;
            color: #7e7e7e;
        }

        h1 {
            text-transform: capitalize;
            color: #fff;
        }
    }
`

export default AboutUsDetails