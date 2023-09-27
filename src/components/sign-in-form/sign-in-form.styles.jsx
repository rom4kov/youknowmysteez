import styled from "styled-components/macro";

export const SingInContainer = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: column;
  margin-right: -2rem;
`;

export const Username = styled.p`
  position: absolute;
  top: -6rem;
  right: -20rem;
  width: 8.75rem;
  height: 2rem;
  color: rgba(255, 255, 255, 0.854);
  background: transparent;
  font-size: 1.15em;
  font-weight: 700;
  border: 2px solid rgb(255, 255, 255);
`;

export const Login = styled.div`
  width: 30rem;
  height: 15rem;
`;

export const LoginTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 1rem;
  color: #fff;
  opacity: 0.6;
`;

export const LoginSubheading = styled.span`
  font-size: 1.1rem;
  color: #fff;
  opacity: 0.6;
`;

export const FormInputs = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`;
