import styled from "styled-components/macro";

import { SpinnerContainer } from "components/spinner/spinner.styles";

export const BaseButton = styled.button`
  width: 47.5%;
  height: 45px;
  letter-spacing: 0.5px;
  line-height: 1rem;
  margin-top: 0.8rem;
  padding: 0.25rem 1rem 0.1rem 1rem;
  font-size: 0.85rem;
  background-color: rgb(25, 59, 25);
  color: white;
  opacity: 0.6;
  text-transform: uppercase;
  font-weight: bolder;
  border: none;
  border-radius: 0.75rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 200ms ease-in-out;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    // transition: all 500ms ease-in-out;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #71a3f2;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  // position: absolute;
  // top: 17rem;
  // left: 4.7rem;
  background-color: white;
  color: black;
  // border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 0.85rem;
  height: 0.85rem;
  margin-bottom: 0.1rem;
  border: 3px solid #636767;
  border-top-color: white;
`;
