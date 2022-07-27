import styled from 'styled-components'

const OurServicesDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 1rem;

    h4 {
        margin-bottom: -1rem;
    }

    .services {
        display: flex;
        flex-direction: row;

        @media (max-width: 500px) {
            flex-direction: column;
        }

        .service {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin-right: 1.5rem;
            margin-bottom: 1rem;
            font-size: 1.5rem;

            i {
                background: #d3cfc9;
                padding: 1rem;
                border-radius: 50%;
                color: #181a1b;
            }

            p {
                margin-bottom: .5rem;
            }

            border: 1px solid #d3cfc9;
            padding: 1rem;
            border-radius: 15px;
        }
    }
`

export default OurServicesDetails