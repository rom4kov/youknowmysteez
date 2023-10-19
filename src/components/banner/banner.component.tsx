import { BannerContainer, Video, LinearGradient } from "./banner.styles";
import video from "../../assets/videos/rakim.webm";
import { forwardRef } from "react";

const Banner = forwardRef(function Banner(props, ref) {
  return (
    <BannerContainer ref={ref} {...props}>
      <Video src={video} autoPlay loop muted />
      <LinearGradient />
    </BannerContainer>
  );
});

Banner.displayName = "Banner";

export default Banner;
