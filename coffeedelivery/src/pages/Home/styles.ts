import styled from "styled-components";

export const CoffeeContainer = styled.div`
    display: flex;
    flex-direction: column;

    position: absolute;
    height: 34rem;
    width: 100vw;

    top: 6.5rem;
`;

export const CoffeeImg = styled.div`
        position: absolute;
        width: 29.75rem;
        height: 22.5rem;

        left: 50.25rem;
        top: 5.75rem;
`;

export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    width: 36.75rem;
    height: 12rem;

    margin-left: 10rem;
    margin-top: 6rem;

    h1{
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 3rem;
    line-height: 4rem;

    color: ${props => props.theme["gray-800"]};
    }

    p{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        size: 1.25rem;
        line-height: 1.5rem;

        color: ${props => props.theme["gray-700"]};
    }
`;

export const AdvantagesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    justify-items: start;
    width: 36.75rem;
    gap: 1rem;

    margin-left: 10rem;

    p{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;

        height: 2rem;

        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5rem;
        color: ${props => props.theme["gray-600"]};
    }

    svg{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        width: 2rem;
        height: 2rem;
        border-radius: 1000px;
        padding: 8px;
        gap: 8px;
    }

    .CartIcon svg{
        background-color: ${props => props.theme["yellow-700"]};
        color: ${props => props.theme.white};
    }

    .PackageIcon svg{
        background-color: ${props => props.theme["gray-700"]};
        color: ${props => props.theme.white};
    }

    .TimerIcon svg{
        background-color: ${props => props.theme["yellow-500"]};
        color: ${props => props.theme.white};
    }

    .CoffeeIcon svg{
        background-color: ${props => props.theme["purple-500"]};
        color: ${props => props.theme.white};
    }
`;