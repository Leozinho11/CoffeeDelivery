import styled from "styled-components";

export const CardContainer = styled.div`
    width: 16rem;
    height: 19rem;

    background-color: ${props => props.theme["gray-100"]};
    border-radius: 6px 36px;
    

    img{
        margin-top: -1.25rem;
        margin-left: 4.25rem;

        width: 7.5rem;
        height: 7.5rem;
    }
`;

export const TagContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 4px;
    
`;

export const CardTitle = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    height: 1.5rem;
    margin-left: 1.25rem;
    margin-right: 1.25rem;
    margin-top: 1rem;

    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;

    color: ${props => props.theme["gray-700"]};
`;

export const CardSubtitle = styled.p`
    height: 2.25rem;
    margin-left: 1.25rem;
    margin-right: 1.25rem;
    margin-top: 0.5rem;

    font-weight: 400;
    font-size: 1rem;
    line-height: 1rem;

    text-align: center;

    color: ${props => props.theme["gray-500"]};
`;

export const PriceContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    width: 13rem;
    height: 2rem;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    margin-top: 3rem;
`;

export const PriceText = styled.p`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    gap: 0.25rem;

    width: 4rem;
    height: 2rem;

    font-weight: 400;
    font-size: 1rem;
    line-height: 1rem;
    text-align: right;
    white-space: nowrap;
    color: ${props => props.theme["gray-600"]};

    span{

        font-family: 'Baloo 2', cursive;
        font-weight: 800;
        font-size: 1.5rem;
    }
`;

export const CardButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;

    width: 7.5rem;
    height: 2.5rem;

    margin-left: 0.5rem;
`;

export const Counter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    gap: 0.25rem;
    

    width: 4.5rem;
    height: 2.5rem;

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

export const CartButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    margin-left: 0.5rem;

    background-color: ${props => props.theme["purple-700"]};
    color: ${props => props.theme.white};

    border: none;
    border-radius: 6px;

    transition: background-color 0.1s;

    &:hover{
        background: ${props => props.theme["purple-500"]};
    }
`;