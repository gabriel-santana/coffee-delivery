import CoffeDeliveryImage from '../../assets/coffee_delivery_image.png'
import {
  TitleContainer,
  BackgroundContainer,
  ContentContainer,
  ListProductContainer,
} from './styles'

import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

import { Card } from './components/card'

export function Home() {
  return (
    <>
      <BackgroundContainer>
        <TitleContainer>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>

            <div className="topics">
              <div>
                <p>
                  <span className="first">
                    <ShoppingCart size={16} weight="fill" />
                  </span>
                  Compra simples e segura
                </p>
                <p>
                  <span className="second">
                    <Timer size={16} weight="fill" />
                  </span>
                  Entrega rápida e rastreada
                </p>
              </div>
              <div>
                <p>
                  <span className="third">
                    <Package size={16} weight="fill" />
                  </span>
                  Embalagem mantém o café intacto
                </p>
                <p>
                  <span className="fourth">
                    <Coffee size={16} weight="fill" />
                  </span>
                  O café chega fresquinho até você
                </p>
              </div>
            </div>
          </div>

          <img
            src={CoffeDeliveryImage}
            alt="Copo de café com sementes de café ao redor"
          />
        </TitleContainer>
      </BackgroundContainer>

      <ContentContainer>
        <h2>Nossos cafés</h2>
        <ListProductContainer>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ListProductContainer>
      </ContentContainer>
    </>
  )
}
