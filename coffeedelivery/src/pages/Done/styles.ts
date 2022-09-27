import styled from "styled-components";

export const DoneContainer = styled.div`
    display: flex;
`;

export const DoneMainContainer = styled.div`
    display: flex;
    flex-direction: column;

    margin-left: 10rem;
    margin-top: 5rem;
`;

export const DoneMainText = styled.p`

    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 2rem;

    color: ${props => props.theme["yellow-700"]};
`;

export const DoneSubtitleText = styled.p`

    font-weight: 400;
    font-size: 1.25rem;

    color: ${props => props.theme["gray-700"]};
`;

export const DoneInfosReviewContainer = styled.div`
    margin-top: 2.5rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2.5rem;
    gap: 2rem;

    box-sizing: border-box;

    width: 33rem;
    height: 17rem;

    border: 1px solid;
    border-color: ${props => props.theme["yellow-500"]};
    border-radius: 6px 36px;
    
`;