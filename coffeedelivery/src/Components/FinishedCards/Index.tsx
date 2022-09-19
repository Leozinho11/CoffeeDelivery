import { CheckoutCardContainer, CheckoutCardCounter, CheckoutCardInfo } from "./styles";
import Expresso from '../../images/Expresso.svg';
import { Minus, Plus } from "phosphor-react";

export function CheckoutCard(){
    return(
        <CheckoutCardContainer>

            <CheckoutCardInfo>
             <img src={Expresso} alt="" />
            
            <CheckoutCardCounter>
            <button>
                <Minus />
            </button>

            <span>1</span>

            <button>
                <Plus />
            </button>
            </CheckoutCardCounter>
            
            </CheckoutCardInfo>

        </CheckoutCardContainer>
    )
}