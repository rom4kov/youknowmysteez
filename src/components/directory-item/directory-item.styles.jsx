import styled from "styled-components";

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

    & .background-image {
      scale: 1.1;
      filter: none;
      transition: scale 3s cubic-bezier(0.25, 0.45, 0.45, 0.95),
        filter 0.5s ease-out;
    }

    & .directory-item-body {
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
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  filter: grayscale(1);
  transition: scale 1s cubic-bezier(0.25, 0.45, 0.45, 0.95),
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

export const DirectoryItemTitle = styled.h2`
  font-weight: 700;
  margin: 0 6px 0;
  font-size: 2.5rem;
  color: #fff;
`;

export const DirectoryItemText = styled.p`
  font-weight: 400;
  font-size: 1.5rem;
  color: #fff;
  margin-block: 0.3rem;
`;

// .directory-item-container {
//   min-width: 30%;
//   height: 20rem;
//   display: flex;
//   flex: 1 1 auto;
//   align-items: center;
//   justify-content: center;
//   margin: 0 7.5px 15px;
//   overflow: hidden;
//   border-radius: 1rem;

//   &:hover {
//     cursor: pointer;

//     & .background-image {
//       scale: 1.1;
//       filter: none;
//       transition: scale 3s cubic-bezier(0.25, 0.45, 0.45, 0.95),
//         filter 0.5s ease-out;
//     }

//     & .directory-item-body {
//       opacity: 0.9;
//     }
//   }

//   &.large {
//     height: 380px;
//   }

//   &:first-child {
//     margin-right: 7.5px;
//   }

//   &:last-child {
//     margin-left: 7.5px;
//   }

//   .background-image {
//     width: 100%;
//     height: 100%;
//     background-size: cover;
//     filter: grayscale(1);
//     transition: scale 1s cubic-bezier(0.25, 0.45, 0.45, 0.95),
//       filter 0.2s ease-out;
//   }

//   .directory-item-body {
//     height: 90px;
//     padding: 0 25px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     position: absolute;

//     h2 {
//       font-weight: 700;
//       margin: 0 6px 0;
//       font-size: 2.5rem;
//       color: #fff;
//     }

//     p {
//       font-weight: 400;
//       font-size: 1.5rem;
//       color: #fff;
//       margin-block: 0.3rem;
//     }
//   }
// }
