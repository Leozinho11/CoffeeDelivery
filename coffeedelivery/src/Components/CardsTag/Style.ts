import styled from "styled-components";

export const TagsContainerStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 4px;

    position: absolute;



    background: ${props => props.theme["yellow-100"]};
    border-radius: 100px;

    font-weight: 700;
    font-size: 0.6rem;
    line-height: 130%;
    text-transform: uppercase;
    color: ${props => props.theme["yellow-700"]};
`;