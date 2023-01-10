import React from 'react'
import { StyledStartBtn } from './styles/StyledStartBtn'

export default function StartBtn({callBack}) {
  return (
    <StyledStartBtn onClick={callBack}>Start Game</StyledStartBtn>
  )
}
