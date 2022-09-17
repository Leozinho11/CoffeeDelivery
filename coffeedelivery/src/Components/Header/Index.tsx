import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import CoffeeLogo from '../../assets/CoffeeLogo.svg'
import { HeaderConteiner } from './styles'

export function Header(){
    return(
        <HeaderConteiner>
            <img src={CoffeeLogo} alt="" />

            <nav>
            
            <NavLink to='/' title='Local' className='localeIcon'>
                <MapPin size={24} weight='fill' />
                São Paulo, SP
            </NavLink>

            <NavLink to='/checkout' title='Carrinho de Compras' className='shoppingCart'>
                <ShoppingCart size={24} weight="fill" />
            </NavLink>

            </nav>
        </HeaderConteiner>
    )
}