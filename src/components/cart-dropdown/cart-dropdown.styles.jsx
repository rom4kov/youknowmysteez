import styled from "styled-components"

import Button from "../button/button.component"

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 22.5rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border-radius: 1rem;
  background-color: white;
  top: 6rem;
  right: 4rem;
  z-index: 5;
  box-shadow: none;
  transform: scale(1, 0);
  transition: all 300ms ease;
  transform-origin: top;

  &.open {
    transform: scale(1, 1);
    box-shadow: 0rem 1rem 2rem -0.3rem rgb(0 0 0 / 33%);
    transition: all 300ms ease;
  }
`

export const CartItems = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  margin-bottom: 0.75rem;
`

export const SumTotal = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 0.25rem;
  margin-bottom: 0.5rem;
  color: black;
  font-size: 1rem;
  font-weight: 700;
`

export const CartButton = styled(Button)`
  width: 100%;
  height: 2rem;
  margin-top: auto;
  margin-left: auto;
  opacity: 0.9;
`
