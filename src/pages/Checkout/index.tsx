import { MapPinLine, CurrencyDollar } from 'phosphor-react'
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
            <div className="info">
              <MapPinLine size={22} />
              <div className="textInfo">
                <p className="textInfo1">Endereço de Entrega</p>
                <p className="textInfo2">
                  Informe o endereço onde deseja receber seu pedido
                </p>
              </div>
            </div>
            <div className="firstRow">
              <Input type="text" className="cep" placeholder="CEP" />
            </div>
            <div className="secondRow">
              <Input type="text" placeholder="Rua" />
            </div>
            <div className="thirdRow">
              <Input type="text" className="number" placeholder="Número" />
              <Input type="text" placeholder="Complemento" />
            </div>
            <div className="fourthRow">
              <Input
                type="text"
                className="neighborhood"
                placeholder="Bairro"
              />
              <Input type="text" placeholder="Cidade" />
              <Input type="text" className="uf" placeholder="UF" />
            </div>
          </div>

          <div className="contentPaymentContainer">
            <div className="info">
              <CurrencyDollar size={22} />
              <div className="textInfo">
                <p className="textInfo1">Pagamento</p>
                <p className="textInfo2">
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </div>
            <div className="selectPayment">
              <div className="selectPaymentMethod">
                <label>
                  <input type="radio" name="paymentMethod" value="credit" />
                  <span>CARTÃO DE CRÉDITO</span>
                </label>
              </div>

              <div className="selectPaymentMethod">
                <label>
                  <input type="radio" name="paymentMethod" value="debit" />
                  <span>CARTÃO DE DÉBITO</span>
                </label>
              </div>

              <div className="selectPaymentMethod">
                <label>
                  <input type="radio" name="paymentMethod" value="money" />
                  <span>DINHEIRO</span>
                </label>
              </div>
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
