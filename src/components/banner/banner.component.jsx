import "./banner.styles.scss";
import video from "../../assets/videos/rakim.webm";
import { forwardRef } from "react";

const Banner = forwardRef(({}, ref) => {
  return (
    <div className="banner" ref={ref}>
      <video src={video} autoPlay loop muted></video>
      <div className="linear-gradient"></div>
    </div>
  );
});

export default Banner;
