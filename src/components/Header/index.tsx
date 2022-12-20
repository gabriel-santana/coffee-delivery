import { NavLink } from 'react-router-dom'

import { MapPin, ShoppingCart } from 'phosphor-react'

import Logo from '../../assets/Logo.svg'

import { HeaderContainer, HeaderContent, Navigation } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink to="/" title="Home">
          <img src={Logo} alt="" />
        </NavLink>

        <Navigation>
          <div className="location">
            <MapPin size={24} weight="fill" className="icon" />
            Balsa Nova, PR
          </div>

          <NavLink to="Checkout" title="Checkout" className="cart">
            <button className="cartButton">
              <ShoppingCart size={24} weight="fill" />
            </button>

            <span>3</span>
          </NavLink>
        </Navigation>
      </HeaderContent>
    </HeaderContainer>
  )
}
