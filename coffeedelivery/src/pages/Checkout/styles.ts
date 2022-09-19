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

    font-family: 'Baloo 2', cursive;
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.5rem;
    white-space: nowrap;

    color: ${props => props.theme["gray-700"]};
`;


export const CheckoutForm = styled.form`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 2rem;

    width: 40rem;
    height: 37rem;

    margin-left: 10rem;
    margin-bottom: 3rem;
`;

export const InfosContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
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

    border-radius: 6px;

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
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0.5rem;

    width: 35rem;
    height: 13.5rem;

    input{
        display: flex;
        align-items: center;
        box-sizing: border-box;

        padding: 0.75rem;

        gap: 0.25rem;

        background: ${props => props.theme["gray-300"]};

        border: 1px solid ${props => props.theme["gray-200"]};
        border-radius: 4px;
    }

    .CEP{
        width: 12.5rem;
    }

    .Rua{
        width: 35rem;
    }

    .Número{
        width: 12.5rem;
    }

    .Complemento{
        width: 22rem;
    }

    .Bairro{
        width: 12.5rem;
    }

    .Cidade{
        width: 17rem;
    }

    .UF{
        width: 3rem;
    }
`;

export const PaymentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding: 2.5rem;
    gap: 2rem;

    width: 40rem;
    height: 13rem;

    background: ${props => props.theme["gray-100"]};
    border-radius: 6px;

    margin-top: 1rem;
    margin-bottom: 3rem;

    section{
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        gap: 0.5rem;
    }

    svg{
        color: ${props => props.theme["purple-500"]};
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

export const PaymentWayContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 0.75rem;

    width: 35rem;
    height: 3rem;
`;

export const PaymentWay = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;

    padding: 1rem;
    gap: 0.75rem;

    width: 11rem;
    height: 3rem;

    border: none;
    border-radius: 6px;
    white-space: nowrap;


    background: ${props => props.theme["gray-300"]};

    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1rem;
    text-transform: uppercase;

    color: ${props => props.theme["gray-600"]};

    svg{
        color: ${props => props.theme["purple-500"]};
    }

    &:hover{
        background: ${props => props.theme["gray-400"]};
    }

    &:active{
        background: ${props => props.theme["purple-100"]};
        border: 1px solid ${props => props.theme["purple-500"]};
    }
`;

export const FinishedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
`;


export const SelectedCoffeesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2.5rem;
    gap: 1.5rem;

    width: 28rem;
    height: 31rem;

    margin-left: 2rem;
 

    background: ${props => props.theme["gray-100"]};
    border-radius: 6px 44px;
`;