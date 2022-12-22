import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'
import { QuantityInputContainer } from './styles'

export function QuantityInput() {
  const [quantity, setQuantity] = useState(0)

  function handleIncrease() {
    setQuantity((state) => state + 1)
  }

  function handleDecrease() {
    setQuantity((state) => state - 1)
  }

  return (
    <QuantityInputContainer>
      <button onClick={handleDecrease} disabled={quantity < 1}>
        <Minus size={14} weight="fill" />
      </button>
      <input type="number" readOnly value={quantity} />
      <button onClick={handleIncrease}>
        <Plus size={14} weight="fill" />
      </button>
    </QuantityInputContainer>
  )
}
