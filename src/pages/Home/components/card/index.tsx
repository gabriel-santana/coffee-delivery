import Expresso from '../../../../assets/Expresso.png'
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
    </CardContainer>
  )
}
