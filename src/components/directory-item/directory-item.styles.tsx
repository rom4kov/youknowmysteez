import styled from "styled-components";

type Props = {
  backgroundImage: string;
};

export const BackgroundImage = styled.div<Props>`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size: cover;
  filter: grayscale(1);
  transition:
    scale 1s cubic-bezier(0.25, 0.45, 0.45, 0.95),
    filter 0.2s ease-out;
`;

export const DirectoryItemBody = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

export const DrectoryItemContainer = styled.div`
  min-width: 30%;
  height: 20rem;
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  margin: 0 7.5px 15px;
  overflow: hidden;
  border-radius: 1rem;

  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      scale: 1.1;
      filter: none;
      transition:
        scale 3s cubic-bezier(0.25, 0.45, 0.45, 0.95),
        filter 0.5s ease-out;
    }

    & ${DirectoryItemBody} {
      opacity: 0.9;
    }
  }

  &.large {
    height: 380px;
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  @media screen and (max-width: 800px) {
    height: 200px;
  }
`;

export const DirectoryItemTitle = styled.h2`
  font-weight: 700;
  margin: 0 6px 0;
  font-size: 2.5rem;
  color: #fff;

  @media screen and (max-width: 800px) {
    font-size: 1.75rem;
  }
`;

export const DirectoryItemText = styled.p`
  font-weight: 400;
  font-size: 1.5rem;
  color: #fff;
  margin-block: 0.3rem;
`;
