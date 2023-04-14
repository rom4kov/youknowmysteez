import styled from "styled-components";

import img from "../../assets/images/auth.jpg";

export const Background = styled.div`
  position: absolute;
  top: 5rem;
  width: 100%;
  height: 140vh;
  background-image: url(${img});
  background-size: cover;
`;

export const AuthContainer = styled.div`
  position: fixed;
  top: 12.5rem;
  left: 17.5vw;
  margin: {
    left: auto;
    right: auto;
  }
  padding: 3rem;
  width: 65vw;
  height: 37rem;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 3rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 7rem;

  .hyphen {
    width: 2px;
    height: 20rem;
    margin-top: 6rem;
    background-color: #fff;
    opacity: 0.25;
  }
`;
