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

`;

export const AddressForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2.5rem;
    gap: 2rem;
    

    width: 40rem;
    height: 23rem;

    background: ${props => props.theme["gray-100"]};

    section{
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        gap: 0.5rem;
    }

    svg{
        color: ${props => props.theme["yellow-700"]};
    }

    header{
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        font-weight: 400;
        font-size: 1rem;

        margin-left: 0.5rem;

        line-height: 1.25rem;

        color: ${props => props.theme["gray-700"]};

        p{
        display: flex;
        align-items: center;

        font-weight: 400;
        font-size: 1rem;

        line-height: 1.25rem;
        
        color: ${props => props.theme["gray-600"]};
    }
}
`;

export const FormInput = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    width: 35rem;
    height: 13.5rem;

    input{
        display: flex;
        align-items: center;

        padding: 0.75rem;

        gap: 0.25rem;

        background: ${props => props.theme["gray-300"]};

        border: 1px solid ${props => props.theme["gray-200"]};
        border-radius: 4px;
    }
`;