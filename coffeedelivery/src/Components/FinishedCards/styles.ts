import styled from "styled-components";

export const CheckoutCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0.25rem;
    gap: 3.5rem;

    background: ${props => props.theme["gray-100"]};
`;

export const CheckoutCardInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.25rem;

    width: 16rem;
    height: 4rem;

    img{
        width: 4rem;
        height: 4rem;
    }
`;

export const CheckoutCardInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;

    width: 10.5rem;
    height: 4rem;
`;

export const CheckoutCardText = styled.p`
    display: flex;
    align-items: center;

    font-weight: 400;
    line-height: 1.25rem;

    color: ${props => props.theme["gray-700"]};
`;

export const CheckoutCardButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;

    width: 10.5rem;
    height: 2rem;
`;

export const CheckoutCardCounter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    gap: 0.25rem;
    

    width: 4.5rem;
    height: 2rem;

    border-radius: 6px;
    background: ${props => props.theme["gray-300"]};

    button{
        border: none;
        background: ${props => props.theme["gray-300"]};

        width: 1rem;
        height: 1rem;
        
        color: ${props => props.theme["purple-500"]};

        &:hover{
            color: ${props => props.theme["purple-700"]};
        }
    }
`;

export const CheckoutCardRemoveButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 0.5rem;
    gap: 0.25rem;

    height: 2rem;

    background: ${props => props.theme["gray-300"]};
    border: none;
    border-radius: 6px;

    svg{
        color: ${props => props.theme["purple-500"]};
    }

    p{
        font-weight: 400;
        line-height: 1.25rem;
        text-transform: uppercase;

        color: ${props => props.theme["gray-600"]};
    }

    &:hover{
        background: ${props => props.theme["gray-400"]};
    }
`;

export const CheckoutCardPrice = styled.div`
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.25rem;

    display: flex;
    align-items: center;
    text-align: right;
    white-space: nowrap;

    color: ${props => props.theme["gray-600"]};
`;