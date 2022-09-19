import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { AddressForm, CheckoutContainer, CheckoutForm, CompleteFormText, FormInput, PaymentContainer, PaymentWay, PaymentWayContainer } from "./styles";

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
                            <input type="text" className="CEP" placeholder="CEP"/>
                            <input type="text" className="Rua" placeholder="Rua"/>
                            <input type="text" className="Número" placeholder="Número"/>
                            <input type="text" className="Complemento" placeholder="Complemento"/>
                            <input type="text" className="Bairro" placeholder="Bairro"/>
                            <input type="text" className="Cidade" placeholder="Cidade"/>
                            <input type="text" className="UF" placeholder="UF"/>
                        </FormInput>
                    </AddressForm>

                    <PaymentContainer>
                        <section>
                            <CurrencyDollar size={22}/><header>Pagamento
                                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                            </header>
                        </section>

                        <PaymentWayContainer>
                            <PaymentWay><CreditCard size={16}/>Cartão de Crédito</PaymentWay>
                            <PaymentWay><Bank size={16}/>Cartão de Débito</PaymentWay>
                            <PaymentWay><Money size={16}/>Dinheiro</PaymentWay>
                        </PaymentWayContainer>
                    </PaymentContainer>
                </form>
            </CheckoutForm>
        </CheckoutContainer>
    )
}