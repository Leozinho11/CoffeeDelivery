import CoffeeLogo from '../../assets/CoffeeLogo.svg'
import { HeaderConteiner } from './styles'

export function Header(){
    return(
        <HeaderConteiner>
            <img src={CoffeeLogo} alt="" />
        </HeaderConteiner>
    )
}