import styled from "styled-components";

export const TagsContainerStyle = styled.div`
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