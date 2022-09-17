import { MapPinLine } from "phosphor-react";
import { AddressForm, CheckoutContainer, CheckoutForm, CompleteFormText, FormInput } from "./styles";

export function Checkout (){
    return(
        <CheckoutContainer>
            <CompleteFormText>Complete seu pedido</CompleteFormText>
            <CheckoutForm>
                <form action="" name="Checkout" >
                    <AddressForm>
                        <section>
                        <MapPinLine size={22}/><header>Endereço de Entrega
                        <p>Informe o endereço onde deseja receber seu pedido</p>
                        </header>
                        </section>

                        <FormInput>
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                        </FormInput>
                        
                    </AddressForm>
                </form>
            </CheckoutForm>
        </CheckoutContainer>
    )
}