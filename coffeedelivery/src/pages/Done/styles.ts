import styled from "styled-components";

export const DoneContainer = styled.div`
    display: flex;

    img{
        margin-top: 11rem;
        margin-left: 10rem;
    }
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
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    
    
    position: relative;

    padding: 2.5rem;

    box-sizing: border-box;
    background: ${props => props.theme["white-bg"]};
    border-radius: 6px 36px;
`;

export const GradientBorder = styled.div`
    display: flex;
    align-items: center;
    justify-items: center;

    margin-top: 6rem;

    padding: 1px;

    position: fixed;

    border-radius: 6px 36px;

    background: linear-gradient(to right, ${props => props.theme["purple-500"]}, ${props => props.theme["yellow-500"]});
`;

export const ReviewText = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    

    gap: 0.75rem;

    p{
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;

        width: 22rem;

        margin-left: 0.75rem;
    }

    svg{
        background: ${props => props.theme["purple-500"]};
        border-radius: 999px;
        color: ${props => props.theme.white};

        padding: 0.5rem;
    }
`;

export const DeliveryTimePreview = styled(ReviewText)`
    p{
        width: 11.5rem;
    }

    svg{
        background: ${props => props.theme["yellow-500"]};
    }
`;

export const ReviewPaymentWay = styled(ReviewText)`
    p{
        width: 13rem;
    }

    svg{
        background: ${props => props.theme["yellow-700"]};
    }
`;
