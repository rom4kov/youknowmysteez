import styled, { css } from "styled-components";

const subColor = "hsla(0, 0%, 97%, 0.6)";
const lightColor = "hsla(0, 0%, 100%, 0.855)";
const mainColor = "rgb(225, 225, 225)";

const shrinkLabelStyles = css`
  top: -0.7rem;
  left: 0.1rem;
  font-size: 0.8rem;
  color: ${mainColor};
`;

export const Group = styled.div`
  position: relative;
`;

export const GrowingUnderline = styled.div`
  position: absolute;
  top: 2.9rem;
  left: 0;
  z-index: 20;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  background-color: rgb(64, 115, 64);
  transition: transform 500ms ease-in-out;
  transform-origin: center;
`;

type FormInputLabelProps = {
  shrink?: boolean;
};

export const FormInputLabel = styled.label<FormInputLabelProps>`
  position: absolute;
  top: 0.6rem;
  left: 0.3rem;
  z-index: 10;
  pointer-events: none;
  font-size: 1.25rem;
  color: ${lightColor};
  transition: 300ms ease all;

  ${({ shrink }) => shrink && shrinkLabelStyles};
`;

export const FormInputField = styled.input`
  position: relative;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 3rem;
  border-inline: none;
  border-top: none;
  border-bottom: 2px solid ${subColor};
  font-size: 1.2rem;
  color: #fff;
  opacity: 0.6;
  background: transparent;

  &:focus {
    outline: none;
  }

  &:focus ~ ${GrowingUnderline} {
    width: 100%;
    transform: scaleX(1);
    transition: transform 500ms ease-in-out;
    transform-origin: center;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles};
  }
`;
