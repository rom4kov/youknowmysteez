import { BannerContainer, Video, LinearGradient } from "./banner.styles";
import video from "../../assets/videos/rakim.webm";
import { ForwardedRef, forwardRef } from "react";

export type BannerProps = {
  props: string;
};

const Banner = forwardRef(function Banner(
  props: BannerProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <BannerContainer ref={ref} aria-label="banner">
      <Video src={video} autoPlay loop muted />
      <LinearGradient />
    </BannerContainer>
  );
});

Banner.displayName = "Banner";

export default Banner;
