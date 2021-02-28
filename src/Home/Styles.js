import { ThemeProvider } from 'styled-components';
import styled from 'styled-components/native';


export const Area = styled.View `
    background: ${props => props.theme.background};
    flex:1;
    align-items:center;
    justify-content:center;
`;
export const Texto = styled.Text`
    color:${props => props.theme.color};
    font-weight:bold;
    font-size:30px;
`;