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

export const TagStyle = styled.p`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;

    width: 5rem;
    height: 1rem;

    margin-left: 5.5rem;
    margin-top: 0ch;

    background: ${props => props.theme["yellow-100"]};
    border-radius: 100px;

    font-weight: 700;
    font-size: 0.6rem;
    line-height: 130%;
    text-transform: uppercase;
    color: ${props => props.theme["yellow-700"]};
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