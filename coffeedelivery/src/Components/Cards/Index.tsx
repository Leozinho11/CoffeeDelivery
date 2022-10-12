import { CardButtonContainer, CardContainer, CardSubtitle, CardTitle, CartButton, Counter, PriceContainer, PriceText, TagStyle } from "./styles";
import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";


interface CardProps{
    image: string,
    CoffeeName: string,
    CoffeeDescripiton: string,
    Price: string
}
export function Card({image, CoffeeDescripiton, CoffeeName, Price}: CardProps){
    return(
        <CardContainer>
            <img src={image} alt="" />
            <TagStyle>Tradicional</TagStyle>
            <CardTitle>{CoffeeName}</CardTitle>
            <CardSubtitle>{CoffeeDescripiton}</CardSubtitle>

            <PriceContainer>
                <PriceText>R$ <span>{Price}</span></PriceText>
                <CardButtonContainer>
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
                        <ShoppingCartSimple weight="fill" size={22}/>
                    </CartButton>
                </CardButtonContainer>
            </PriceContainer>
        </CardContainer>
    )
}