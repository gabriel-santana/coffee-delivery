import { ShoppingCart } from 'phosphor-react'
import Expresso from '../../../../assets/Expresso.png'
import { QuantityInput } from '../../../../components/QuantityInput'
import { CardContainer } from './styles'

export function Card() {
  return (
    <CardContainer>
      <img src={Expresso} alt="Imagem do produto" />
      <div className="tags">
        <span>TRADICIONAL</span>
        <span>COM LEITE</span>
        <span>GELADO</span>
      </div>
      <h3>Expresso Tradicional</h3>
      <p>O tradicional café feito com água quente e grãos moídos</p>

      <div className="cardActions">
        <p>
          R$ <span>9,90</span>
        </p>
        <QuantityInput />
        <button>
          <ShoppingCart size={22} weight="fill" />
        </button>
      </div>
    </CardContainer>
  )
}
