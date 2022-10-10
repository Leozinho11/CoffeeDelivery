import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { DeliveryTimePreview, DoneContainer, DoneInfosReviewContainer, DoneMainContainer, DoneMainText, DoneSubtitleText, GradientBorder, ReviewPaymentWay, ReviewText, } from "./styles";
import DoneImage from '../../assets/DoneImage.svg'

export function Done(){
    return(
        <DoneContainer>
            <DoneMainContainer>
                <DoneMainText> Uhu! Pedido confirmado</DoneMainText>
                <DoneSubtitleText>Agora é só aguardar que logo o café chegará até você</DoneSubtitleText>
                <GradientBorder>
                    <DoneInfosReviewContainer>
                        <ReviewText>
                            <MapPin size={32} weight='fill'/> 
                            <p>Entrega em<strong>Rua Amadeu Massaroto, 927</strong>
                            Jardim Sapopemba - São Paulo, SP</p>
                        </ReviewText>

                        <DeliveryTimePreview>
                            <Timer size={32} weight='fill'/>
                            <p>Previsão de entrega<strong>20 min - 30 min</strong></p>
                        </DeliveryTimePreview>

                        <ReviewPaymentWay>
                            <CurrencyDollar size={32} weight='fill'/>
                            <p>Pagamento na entrega<strong>Cartão de Crédito</strong></p>
                        </ReviewPaymentWay>
                    </DoneInfosReviewContainer>
                </GradientBorder>
            </DoneMainContainer>
            <img src={DoneImage} alt="" />
        </DoneContainer>
    )
}