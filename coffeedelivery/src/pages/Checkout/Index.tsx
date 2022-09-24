import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { CheckoutCard } from "../../Components/FinishedCards/Index";
import { AddressForm, CheckoutContainer, CheckoutForm, CheckoutTitles, DeliveryPrice, FinishedButton, FinishedContainer, FinishedPrices, FormInput, InfosContainer, PaymentContainer, PaymentWay, PaymentWayContainer, SelectedCoffeesContainer, TotalPrice } from "./styles";

export function Checkout (){
    return(
        <CheckoutContainer>
            
                <CheckoutForm  name="Checkout" >
                <InfosContainer>
                    <CheckoutTitles>Complete seu pedido</CheckoutTitles>
                    <AddressForm>
                        <section>
                        <MapPinLine size={22}/><header>Endereço de Entrega
                        <p>Informe o endereço onde deseja receber seu pedido</p>
                        </header>
                        </section>

                        <FormInput>
                            <input type="text" required className="CEP" placeholder="CEP"/>
                            <input type="text" required className="Rua" placeholder="Rua"/>
                            <input type="text" required className="Número" placeholder="Número"/>
                            <input type="text" required className="Complemento" placeholder="Complemento"/>
                            <input type="text" required className="Bairro" placeholder="Bairro"/>
                            <input type="text" required className="Cidade" placeholder="Cidade"/>
                            <input type="text" required className="UF" placeholder="UF"/>
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
                </InfosContainer>

                <FinishedContainer>
                    <CheckoutTitles>Cafés Selecionados</CheckoutTitles>
                    <SelectedCoffeesContainer>
                        <CheckoutCard />

                        <FinishedPrices>
                            Total de itens
                            <span>R$ 9,90</span>
                        </FinishedPrices>

                        <DeliveryPrice>
                            Entrega
                            <span>R$ 3,50</span>
                        </DeliveryPrice>

                        <TotalPrice>
                            Total
                            <span>R$ 13,40</span>
                        </TotalPrice>

                        <FinishedButton type="submit">
                            Confirmar Pedido
                        </FinishedButton>
                    </SelectedCoffeesContainer>
                </FinishedContainer>
            </CheckoutForm>
        </CheckoutContainer>
    )
}