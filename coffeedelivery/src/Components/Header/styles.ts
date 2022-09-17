import styled from "styled-components";

export const HeaderConteiner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 2rem 10rem;
    gap: 51rem;

    position: static;
    height: 6.5rem;
    width: 100vw;

    nav{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        gap: 0.75rem;

        .localeIcon{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 0.5rem;
            gap: 0.25rem;

            background: ${props => props.theme["purple-100"]};
            border-radius: 6px;

            text-decoration: none;

            transition: background-color 0.1s;

            &:hover{
                background: ${props => props.theme["purple-500"]};
                color: ${props => props.theme.white};

                svg{
                    color: ${props => props.theme.white};
                }
            }
            
        }

        .shoppingCart{
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.5rem;

            background: ${props => props.theme["yellow-100"]};
            border-radius: 6px;

            transition: background-color 0.1s;

            svg{
                color: ${props => props.theme["yellow-500"]};
                transition: background-color 0.1s;
            }

            &:hover{
                background: ${props => props.theme["yellow-500"]};
                
                svg{
                    color: ${props => props.theme.white};
                }
            }
        }
    }
`;