import React from 'react'
import { StyledStartBtn } from './styles/StyledStartBtn'

export default function StartBtn({callback}) {
  return (
    <StyledStartBtn onClick={callback}>Start Game</StyledStartBtn>
  )
}
