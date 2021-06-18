import React from 'react'
import {
  Button,
  PlusIcon,
  MinusIcon,
} from '../components/Button/Button.styles.js'
import useCounter from '../components/customHooks/useCounter.js'
import * as S from './Test1.styles.js'

const Test2 = () => {
  const [count, increment, decrement] = useCounter(0, 1)
  return (
    <S.Wrapper>
      <div>
        <Button type="button" black shouldHoverBlack onClick={decrement}>
          <span>
            <MinusIcon />
          </span>
          <span>Decrement</span>
        </Button>
      </div>
      <h1>
        Count:<span>{count}</span>
      </h1>
      <div>
        <Button
          type="button"
          backgroundColor="#FF69B4"
          shouldHoverPink
          color="#ffffff"
          onClick={increment}
        >
          <span>
            <PlusIcon />
          </span>
          <span>Increment</span>
        </Button>
      </div>
    </S.Wrapper>
  )
}

export default Test2
