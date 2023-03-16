import { CardButtonContainer, CardContainer, CardSubtitle, CardTitle, CartButton, Counter, PriceContainer, PriceText, TagContainer } from "../styles";
import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { CardsTags } from "../../CardsTag/Index";


interface CardProps {
    image: string,
    TagText1: string,
    TagText2: string,
    CoffeeName: string,
    CoffeeDescripiton: string,
    Price: string
}
export function CardWithTwoTags({ image, TagText1, TagText2, CoffeeDescripiton, CoffeeName, Price }: CardProps) {
    return (
        <CardContainer>
            <img src={image} alt="" />
            <TagContainer>
                <CardsTags TagText={TagText1} />
                <CardsTags TagText={TagText2} />
            </TagContainer>
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
                        <ShoppingCartSimple weight="fill" size={22} />
                    </CartButton>
                </CardButtonContainer>
            </PriceContainer>
        </CardContainer>
    )
}