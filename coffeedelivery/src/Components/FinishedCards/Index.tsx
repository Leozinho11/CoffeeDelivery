import { CheckoutCardButtonsContainer, CheckoutCardContainer, CheckoutCardCounter, CheckoutCardInfo, CheckoutCardInfoContainer, CheckoutCardPrice, CheckoutCardRemoveButton, CheckoutCardText } from "./styles";
import Expresso from '../../images/Expresso.svg';
import { Minus, Plus, Trash } from "phosphor-react";

export function CheckoutCard(){
    return(
        <CheckoutCardContainer>

            <CheckoutCardInfoContainer>
             <img src={Expresso} alt="" />
            <CheckoutCardInfo>
            <CheckoutCardText>Expresso Tradicional</CheckoutCardText>
                <CheckoutCardButtonsContainer>
                    <CheckoutCardCounter>
                    <button>
                        <Minus />
                    </button>

                    <span>1</span>

                    <button>
                        <Plus />
                    </button>
                    </CheckoutCardCounter>
                    <CheckoutCardRemoveButton>
                        <Trash size={16}/>
                        <p>Remover</p>
                    </CheckoutCardRemoveButton>
                </CheckoutCardButtonsContainer>
            </CheckoutCardInfo>
            </CheckoutCardInfoContainer>
            
            <CheckoutCardPrice>R$ 9,90</CheckoutCardPrice>
        </CheckoutCardContainer>
    )
}