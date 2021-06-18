import React from 'react'
import {
  Button,
  PlusIcon,
  MinusIcon,
} from '../components/Button/Button.styles.js'
import * as S from './Test1.styles.js'

const Test1 = () => {
  return (
    <S.Wrapper>
      <Button type="button" black shouldHoverBlack>
        <span>
          <MinusIcon />
        </span>
        <span>Decrement</span>
      </Button>

      <Button
        type="button"
        backgroundColor="#FF69B4"
        shouldHoverPink
        color="#ffffff"
      >
        <span>
          <PlusIcon />
        </span>
        <span>Increment</span>
      </Button>
    </S.Wrapper>
  )
}

export default Test1
