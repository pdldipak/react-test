import React from 'react'
import styled from 'styled-components'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

export function Button({ ...props }) {
  return <ButtonStyle {...props}>{props.children}</ButtonStyle>
}

const ButtonStyle = styled.button`
  background-color: ${(props) => props.backgroundColor ?? '#ffffff'};
  color: ${(props) => props.color ?? '#00000'};
  text-transform: uppercase;
  padding: 20px 40px;
  display: flex;
  width: 300px;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  margin: 4px auto;
  cursor: pointer;
  border-radius: 50px;
  &:focus {
    outline: none;
    box-shadow: none;
  }
  &:hover {
    background-color: ${(props) =>
      props.shouldHoverBlack
        ? '#000000'
        : props.shouldHoverPink
        ? '#663399'
        : '#374151'};
    color: #fff;
    font-weight: 700;
  }
  & span:first-child {
    margin-right: 20px;
    text-align: center;
    position: relative;
  }

  ${({ black }) => {
    switch (true) {
      case black:
        return `6px solid #00000`
      default:
        return `border:none`
    }
  }};
`

export const PlusIcon = styled(AiOutlinePlus)`
  width: 40px;
  font-size: 50px;
  color: #fff;
`

export const MinusIcon = styled(AiOutlineMinus)`
  width: 40px;
  font-size: 50px;
  color: #000;
  &:hover {
    color: #fff;
  }
`
