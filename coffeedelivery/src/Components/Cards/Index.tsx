import { CardContainer, CardSubtitle, CardTitle, TagStyle } from "./styles";
import Expresso from '../../images/Expresso.svg'

export function Card(){
    return(
        <CardContainer>
            <img src={Expresso} alt="Café expresso" />
            <TagStyle>Tradicional</TagStyle>
            <CardTitle>Expresso Americano</CardTitle>
            <CardSubtitle>O tradicional café feito com água quente e grãos moídos</CardSubtitle>
        </CardContainer>
    )
}