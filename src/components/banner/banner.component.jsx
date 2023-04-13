import { BannerContainer, Video, LinearGradient } from "./banner.styles.jsx";
import video from "../../assets/videos/rakim.webm";
import { forwardRef } from "react";

const Banner = forwardRef(({ _ }, ref) => {
  return (
    <BannerContainer ref={ref}>
      <Video src={video} autoPlay loop muted></Video>
      <LinearGradient />
    </BannerContainer>
  );
});

export default Banner;
