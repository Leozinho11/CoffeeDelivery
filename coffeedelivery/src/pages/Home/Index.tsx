import { Package, ShoppingCart, Timer, Coffee } from 'phosphor-react'
import CoffeeCup from '../../assets/CoffeeCup.svg'
import { CardWithOneTag } from '../../Components/Cards/WithOneTag/Index'
import { AdvantagesContainer, CoffeeContainer, CoffeeImg, CoffeeList, CoffeeMenu, ContainerText } from './styles'
import Expresso from '../../images/Expresso.svg';
import { CardWithTwoTags } from '../../Components/Cards/WithTwoTags/Index';

export function Home() {
    return (
        <CoffeeContainer>
            <CoffeeImg><img src={CoffeeCup} alt="" /></CoffeeImg>

            <ContainerText>
                <h1>Encontre o café perfeito para qualquer hora do dia.</h1>
                <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora.</p>
            </ContainerText>

            <AdvantagesContainer>
                <p className='CartIcon'><ShoppingCart weight='fill' />Compra simples e segura</p>
                <p className='PackageIcon'><Package />Embalagem mantém o café intacto</p>
                <p className='TimerIcon'><Timer weight='fill' />Entrega Rápida e rastreada</p>
                <p className='CoffeeIcon'><Coffee weight='fill' />O café chega fresquinho até você</p>
            </AdvantagesContainer>

            <CoffeeList>
                <header>Nossos cafés</header>
                <CoffeeMenu>
                    <CardWithOneTag image={Expresso} TagText={'Tradicional'} CoffeeName={'Expresso'} CoffeeDescripiton={'Café padrão'} Price={'9,90'} />
                    <CardWithTwoTags image={Expresso} TagText1={'Tradicional'} TagText2={'Com Leite'} CoffeeName={''} CoffeeDescripiton={''} Price={''} />
                </CoffeeMenu>
            </CoffeeList>
        </CoffeeContainer>
    )
}