import styled from "styled-components";

export const BannerContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  z-index: 0;
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const LinearGradient = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.6) 99%
  );
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;
