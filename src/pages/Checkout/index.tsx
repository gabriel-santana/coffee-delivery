import { Input } from './components/Input'
import {
  AdressContainer,
  CheckoutContainer,
  SelectedCoffeesContainer,
} from './styles'

export function Checkout() {
  return (
    <>
      <CheckoutContainer>
        <AdressContainer>
          <h2>Complete seu pedido</h2>
          <div className="contentAdressContainer">
            <div className="firstRow">
              <Input type="text" placeholder="CEP" />
            </div>
            <div className="secondRow">
              <Input type="text" placeholder="Rua" />
            </div>
            <div className="thirdRow">
              <Input type="text" placeholder="Número" />
              <Input type="text" placeholder="Complemento" />
            </div>
            <div className="fourthRow">
              <Input type="text" placeholder="Bairro" />
              <Input type="text" placeholder="Cidade" />
              <Input type="text" placeholder="UF" />
            </div>
          </div>
        </AdressContainer>

        <SelectedCoffeesContainer>
          <h2>Cafés selecionados</h2>
          <div>
            <button>confirmar pedido</button>
          </div>
        </SelectedCoffeesContainer>
      </CheckoutContainer>
    </>
  )
}
