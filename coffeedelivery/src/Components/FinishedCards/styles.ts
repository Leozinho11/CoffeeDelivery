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

export const CheckoutCardInfo = styled.div`
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