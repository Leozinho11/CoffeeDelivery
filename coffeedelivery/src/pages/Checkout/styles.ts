import styled from "styled-components";

export const CheckoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
    align-items: flex-start;
`;

export const CheckoutTitles = styled.p`
    display: flex;
    align-items: center;

    width: 10.5rem;
    height: 1.5rem;

    margin-top: 2.5rem;
    margin-bottom: 1rem;

    font-family: 'Baloo 2', cursive;
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.5rem;
    white-space: nowrap;

    color: ${props => props.theme["gray-700"]};
`;

export const CompleteFormText = styled(CheckoutTitles)`
    margin-left: 10rem;
`;

export const CheckoutForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;

    width: 40rem;
    height: 37rem;

    margin-left: 10rem;

    background: ${props => props.theme["gray-100"]};

    form{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 2.5rem;
        gap: 2rem;

        width: 40rem;
        height: 23rem;

        svg{
            color: ${props => props.theme["yellow-700"]};
        }
    }
`;