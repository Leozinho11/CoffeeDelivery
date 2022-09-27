import { DoneContainer, DoneInfosReviewContainer, DoneMainContainer, DoneMainText, DoneSubtitleText, } from "./styles";

export function Done(){
    return(
        <DoneContainer>
            <DoneMainContainer>
                <DoneMainText> Uhu! Pedido confirmado</DoneMainText>
                <DoneSubtitleText>Agora é só aguardar que logo o café chegará até você</DoneSubtitleText>
                <DoneInfosReviewContainer>

                </DoneInfosReviewContainer>
            </DoneMainContainer>
        </DoneContainer>
    )
}