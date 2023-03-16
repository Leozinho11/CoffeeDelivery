import { CardButtonContainer, CardContainer, CardSubtitle, CardTitle, CartButton, Counter, PriceContainer, PriceText } from "../styles";
import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { CardsTags } from "../../CardsTag/Index";


interface CardProps{
    image: string,
    TagText: string,
    CoffeeName: string,
    CoffeeDescripiton: string,
    Price: string
}
export function CardWithOneTag({image, TagText, CoffeeDescripiton, CoffeeName, Price}: CardProps){
    return(
        <CardContainer>
            <img src={image} alt="" />
            <CardsTags TagText={TagText}/>
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