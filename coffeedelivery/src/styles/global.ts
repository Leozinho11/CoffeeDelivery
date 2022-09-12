import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme['yellow-700']};
}

body{
    background: ${props => props.theme['white-bg']};
    color: ${props => props.theme['gray-600']};
    --webkit-font-smoothing: antialiased;
}

body, input, textarea, button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
}

header, h1{
    font-family: 'Baloo 2', cursive;
    color: ${props => props.theme['gray-800']};
    --webkit-font-smoothing: antialiased;
}
`;