import { CardContainer, CardSubtitle, CardTitle, CartButton, Counter, PriceContainer, PriceText, TagStyle } from "./styles";
import Expresso from '../../images/Expresso.svg'
import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";

export function Card(){
    return(
        <CardContainer>
            <img src={Expresso} alt="Café expresso" />
            <TagStyle>Tradicional</TagStyle>
            <CardTitle>Expresso Americano</CardTitle>
            <CardSubtitle>O tradicional café feito com água quente e grãos moídos</CardSubtitle>

            <PriceContainer>
                <PriceText>R$ <span>9,90</span></PriceText>
                <Counter>
                    <button>
                        <Minus />
                    </button>

                    <span>1</span>

                    <button>
                        <Plus />
                    </button>
                </Counter>

                <CartButton>
                    <ShoppingCartSimple weight="fill"/>
                </CartButton>

            </PriceContainer>
        </CardContainer>
    )
}