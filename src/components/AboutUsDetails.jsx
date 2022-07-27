import styled from 'styled-components'

const AboutUsDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 1rem;

    @media (max-width: 600px) {
        flex-direction: column;
    }

    .leftContent {
        margin-right: 2rem;
        max-width: 30rem;

        @media (max-width: 414px) {
            margin-left: 1.6rem;
        }

        @media (max-width: 375px) {
            margin-left: -1.4rem;
        }

    }

    .rightContent {
        width: 40rem;

        @media (max-width: 1366px) {
            width: 35rem;
        }

        @media (max-width: 414px) {
            width: 25rem;
        }

        @media (max-width: 375px) {
            width: 20rem;
        }

        h4 {
            text-transform: uppercase;
        }
    }
`

export default AboutUsDetails