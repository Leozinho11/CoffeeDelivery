import { MapPinLine } from "phosphor-react";
import { CheckoutContainer, CheckoutForm, CompleteFormText } from "./styles";

export function Checkout (){
    return(
        <CheckoutContainer>
            <CompleteFormText>Complete seu pedido</CompleteFormText>
            <CheckoutForm>
                <form action="" name="Checkout" >
                    <header><MapPinLine size={22}/> Endereço de Entrega</header>
                </form>
            </CheckoutForm>
        </CheckoutContainer>
    )
}