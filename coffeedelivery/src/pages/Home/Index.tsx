import { Package, ShoppingCart, Timer, Coffee } from 'phosphor-react'
import CoffeeCup from '../../assets/CoffeeCup.svg'
import { AdvantagesContainer, CoffeeContainer, CoffeeImg, ContainerText } from './styles'

export function Home(){
    return(
        <CoffeeContainer>
            <CoffeeImg><img src={CoffeeCup} alt="" /></CoffeeImg>
           
            <ContainerText>
            <h1>Encontre o café perfeito para qualquer hora do dia.</h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora.</p>
            </ContainerText>

            <AdvantagesContainer>
                <p className='CartIcon'><ShoppingCart weight='fill'/>Compra simples e segura</p>
                <p className='PackageIcon'><Package />Embalagem mantém o café intacto</p>
                <p className='TimerIcon'><Timer weight='fill'/>Entrega Rápida e rastreada</p>
                <p className='CoffeeIcon'><Coffee weight='fill'/>O café chega fresquinho até você</p>
            </AdvantagesContainer>
        </CoffeeContainer>
    )
}