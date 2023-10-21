import { BannerContainer, Video, LinearGradient } from "./banner.styles";
import video from "../../assets/videos/rakim.webm";
import { RefObject, forwardRef } from "react";

export type BannerProps = React.HTMLProps<HTMLDivElement> & {
  ref: RefObject<HTMLDivElement>;
};

const Banner = forwardRef(function Banner({ ref }: BannerProps) {
  return (
    <BannerContainer ref={ref}>
      <Video src={video} autoPlay loop muted />
      <LinearGradient />
    </BannerContainer>
  );
});

Banner.displayName = "Banner";

export default Banner;
