import styled from 'styled-components'

const PricingPlanDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h4 {
        margin-bottom: -1rem;
    }

    h1 {
        color: #fff;
    }

    .plans {
        display: flex;
        text-align: center;
        
        @media (max-width: 600px) {
            flex-direction: column;
        }
        
        .plan {
            width: 300px;
            margin: 20px;

            @media (max-width: 768px) {
                margin-right: -2rem;
                margin-left: -3rem;
            }

            .header-plan {
                background: #181a1b;
                color: #d3cfc9;
                border-radius: 50%;
                padding: 1rem;
                width: 9rem;
                margin-left: 5.3rem;
                border: 2px solid #d3cfc9;

                h2 {
                    margin-bottom: 0;
                }
            }

            ul {
                list-style: none;
                margin-left: -3rem;
            }

            button {
                background: #272727;
                color: #d3cfc9;
                font-weight: bold;
                border-radius: 5px;
                padding: 1rem;
                border: none;
                text-transform: uppercase;
                cursor: pointer;

                :hover {
                    background: #d3cfc9;
                    color: #181a1b;
                    transition: 2s;
                }
            }
        }
    }
`

export default PricingPlanDetails